import bcrypt from 'bcryptjs';
import { getDbPool, isMysqlConnected, mockStore } from './connection.js';

export async function runMigrationsAndSeed() {
  const adminPasswordHash = await bcrypt.hash('admin123', 10);
  const now = new Date().toISOString();

  // Initial Seed Data
  const defaultUsers = [
    {
      id: 'usr-admin-1',
      name: 'Alex Vance',
      email: 'admin@flipcode.io',
      password: adminPasswordHash,
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: now,
    },
    {
      id: 'usr-member-2',
      name: 'Sarah Connor',
      email: 'sarah@flipcode.io',
      password: adminPasswordHash,
      role: 'member',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      createdAt: now,
    },
  ];

  const defaultProjects = [
    {
      id: 'proj-1',
      name: 'NextGen Cloud Infrastructure',
      description: 'Migrating microservices architecture to global edge containers with 99.99% uptime.',
      status: 'in_progress',
      priority: 'high',
      budget: 45000,
      spent: 28500,
      progress: 68,
      deadline: '2026-11-15',
      ownerId: 'usr-admin-1',
      ownerName: 'Alex Vance',
      createdAt: '2026-08-10T10:00:00Z',
      updatedAt: '2026-09-20T14:30:00Z',
    },
    {
      id: 'proj-2',
      name: 'AI Agent Workflow Engine',
      description: 'Autonomous orchestration platform for background data aggregation and semantic query pipelines.',
      status: 'in_progress',
      priority: 'critical',
      budget: 80000,
      spent: 42000,
      progress: 54,
      deadline: '2026-12-01',
      ownerId: 'usr-admin-1',
      ownerName: 'Alex Vance',
      createdAt: '2026-08-15T11:00:00Z',
      updatedAt: '2026-09-25T09:15:00Z',
    },
    {
      id: 'proj-3',
      name: 'Realtime Analytics Telemetry',
      description: 'Sub-millisecond event streaming ingestion with WebSocket broadcasting for enterprise clients.',
      status: 'completed',
      priority: 'medium',
      budget: 32000,
      spent: 31000,
      progress: 100,
      deadline: '2026-09-10',
      ownerId: 'usr-member-2',
      ownerName: 'Sarah Connor',
      createdAt: '2026-07-01T08:00:00Z',
      updatedAt: '2026-09-10T17:00:00Z',
    },
    {
      id: 'proj-4',
      name: 'Mobile Gateway & SDK v3',
      description: 'Cross-platform native bridges with offline sync support and biometric authentication.',
      status: 'planning',
      priority: 'low',
      budget: 25000,
      spent: 3500,
      progress: 15,
      deadline: '2027-01-30',
      ownerId: 'usr-member-2',
      ownerName: 'Sarah Connor',
      createdAt: '2026-09-01T12:00:00Z',
      updatedAt: '2026-09-18T16:45:00Z',
    },
    {
      id: 'proj-5',
      name: 'Security & Compliance Audit 2026',
      description: 'SOC2 Type II certification readiness review and automated penetration testing.',
      status: 'paused',
      priority: 'high',
      budget: 18000,
      spent: 9000,
      progress: 50,
      deadline: '2026-10-31',
      ownerId: 'usr-admin-1',
      ownerName: 'Alex Vance',
      createdAt: '2026-08-20T15:00:00Z',
      updatedAt: '2026-09-15T11:30:00Z',
    },
  ];

  const defaultTeamMembers = [
    {
      id: 'tm-1',
      name: 'Alex Vance',
      email: 'admin@flipcode.io',
      role: 'Lead Architect',
      department: 'Engineering',
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      joinedAt: '2024-01-15T09:00:00Z',
    },
    {
      id: 'tm-2',
      name: 'Sarah Connor',
      email: 'sarah@flipcode.io',
      role: 'Frontend Principal',
      department: 'Product UI',
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      joinedAt: '2024-03-01T09:00:00Z',
    },
    {
      id: 'tm-3',
      name: 'David Kim',
      email: 'david.kim@flipcode.io',
      role: 'DevOps & SRE Specialist',
      department: 'Cloud Ops',
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      joinedAt: '2024-05-10T09:00:00Z',
    },
    {
      id: 'tm-4',
      name: 'Elena Rostova',
      email: 'elena@flipcode.io',
      role: 'QA & Security Engineer',
      department: 'Security',
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      joinedAt: '2024-07-20T09:00:00Z',
    },
  ];

  const defaultLogs = [
    {
      id: 'log-1',
      userId: 'usr-admin-1',
      userName: 'Alex Vance',
      action: 'DEPLOYED_PRODUCTION',
      entity: 'NextGen Cloud Infrastructure',
      details: 'Container image v2.4.0 successfully deployed to multi-region cluster.',
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
    },
    {
      id: 'log-2',
      userId: 'usr-member-2',
      userName: 'Sarah Connor',
      action: 'UPDATED_PROGRESS',
      entity: 'Realtime Analytics Telemetry',
      details: 'Milestone 3 marked as 100% completed.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    },
    {
      id: 'log-3',
      userId: 'usr-admin-1',
      userName: 'Alex Vance',
      action: 'BUDGET_ADJUSTMENT',
      entity: 'AI Agent Workflow Engine',
      details: 'Allocated additional GPU compute compute tier budget ($15,000).',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    },
  ];

  if (!isMysqlConnected()) {
    // Populate in-memory fallback
    if (mockStore.users.length === 0) {
      mockStore.users = defaultUsers;
      mockStore.projects = defaultProjects;
      mockStore.teamMembers = defaultTeamMembers;
      mockStore.activityLogs = defaultLogs;
      console.log('[Database] Initialized in-memory fallback dataset.');
    }
    return;
  }

  const pool = await getDbPool();
  if (!pool) return;

  try {
    console.log('[Database] Running MySQL table creation & schema sync...');

    // 1. Users Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM('admin', 'member', 'viewer') DEFAULT 'member',
        avatar VARCHAR(512),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // 2. Projects Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        status ENUM('planning', 'in_progress', 'completed', 'paused') DEFAULT 'planning',
        priority ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
        budget DECIMAL(12, 2) DEFAULT 0.00,
        spent DECIMAL(12, 2) DEFAULT 0.00,
        progress INT DEFAULT 0,
        deadline DATE,
        owner_id VARCHAR(64),
        owner_name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // 3. Team Members Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS team_members (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        role VARCHAR(128) NOT NULL,
        department VARCHAR(128) NOT NULL,
        status ENUM('active', 'inactive', 'invited') DEFAULT 'active',
        avatar VARCHAR(512),
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // 4. Activity Logs Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS activity_logs (
        id VARCHAR(64) PRIMARY KEY,
        user_id VARCHAR(64),
        user_name VARCHAR(255) NOT NULL,
        action VARCHAR(128) NOT NULL,
        entity VARCHAR(255) NOT NULL,
        details TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Check if users exist; if not, insert initial seeds
    const [userRows] = await pool.query('SELECT COUNT(*) as count FROM users');
    if (userRows[0].count === 0) {
      console.log('[Database] Seeding initial MySQL database records...');

      for (const u of defaultUsers) {
        await pool.query(
          'INSERT INTO users (id, name, email, password, role, avatar) VALUES (?, ?, ?, ?, ?, ?)',
          [u.id, u.name, u.email, u.password, u.role, u.avatar]
        );
      }

      for (const p of defaultProjects) {
        await pool.query(
          'INSERT INTO projects (id, name, description, status, priority, budget, spent, progress, deadline, owner_id, owner_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [p.id, p.name, p.description, p.status, p.priority, p.budget, p.spent, p.progress, p.deadline, p.ownerId, p.ownerName]
        );
      }

      for (const tm of defaultTeamMembers) {
        await pool.query(
          'INSERT INTO team_members (id, name, email, role, department, status, avatar) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [tm.id, tm.name, tm.email, tm.role, tm.department, tm.status, tm.avatar]
        );
      }

      for (const l of defaultLogs) {
        await pool.query(
          'INSERT INTO activity_logs (id, user_id, user_name, action, entity, details, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [l.id, l.userId, l.userName, l.action, l.entity, l.details, l.timestamp]
        );
      }
      console.log('[Database] ✅ Initial database seed successfully committed.');
    } else {
      console.log('[Database] MySQL tables already contain data, skipping seed.');
    }
  } catch (err) {
    console.error('[Database] ❌ Migration / Seed Error:', err);
  }
}
