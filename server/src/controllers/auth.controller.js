import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getDbPool, isMysqlConnected, mockStore } from '../db/connection.js';
import { config } from '../config/index.js';

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ success: false, message: 'Name, email, and password are required' });
      return;
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check existing user
    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [normalizedEmail]);
      if (existing && existing.length > 0) {
        res.status(400).json({ success: false, message: 'An account with this email already exists' });
        return;
      }
    } else {
      const existing = mockStore.users.find(u => u.email.toLowerCase() === normalizedEmail);
      if (existing) {
        res.status(400).json({ success: false, message: 'An account with this email already exists' });
        return;
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = `usr-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
    const now = new Date().toISOString();

    const newUser = {
      id: userId,
      name,
      email: normalizedEmail,
      password: hashedPassword,
      role: 'member',
      avatar,
      createdAt: now,
    };

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      await pool.query(
        'INSERT INTO users (id, name, email, password, role, avatar) VALUES (?, ?, ?, ?, ?, ?)',
        [newUser.id, newUser.name, newUser.email, newUser.password, newUser.role, newUser.avatar]
      );
      await pool.query(
        'INSERT INTO activity_logs (id, user_id, user_name, action, entity, details, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [`act-${Date.now()}`, newUser.id, newUser.name, 'Created account', 'SaaS Workspace', 'User registration', now]
      );
    } else {
      mockStore.users.push(newUser);
      mockStore.activityLogs.unshift({
        id: `act-${Date.now()}`,
        userId: newUser.id,
        userName: newUser.name,
        action: 'Created account',
        entity: 'SaaS Workspace',
        details: 'User registration',
        timestamp: now,
      });
    }

    const payload = {
      userId: newUser.id,
      email: newUser.email,
      role: newUser.role,
    };

    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      data: {
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          avatar: newUser.avatar,
        },
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Registration failed' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ success: false, message: 'Email and password are required' });
      return;
    }

    const normalizedEmail = email.toLowerCase().trim();
    let user = null;

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [normalizedEmail]);
      if (rows && rows.length > 0) {
        user = rows[0];
      }
    } else {
      user = mockStore.users.find(u => u.email.toLowerCase() === normalizedEmail) || null;
    }

    if (!user || !user.password) {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
      return;
    }

    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Logged in successfully',
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        },
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Login failed' });
  }
}

export async function getMe(req, res) {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    let user = null;

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [rows] = await pool.query('SELECT id, name, email, role, avatar, created_at as createdAt FROM users WHERE id = ?', [userId]);
      if (rows && rows.length > 0) {
        user = rows[0];
      }
    } else {
      const found = mockStore.users.find(u => u.id === userId);
      if (found) {
        const { password, ...safeUser } = found;
        user = safeUser;
      }
    }

    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to fetch user profile' });
  }
}
