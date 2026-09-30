import { getDbPool, isMysqlConnected, mockStore } from '../db/connection.js';

export async function getTeamMembers(req, res) {
  try {
    let members = [];

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [rows] = await pool.query(
        `SELECT id, name, email, role, status, department, avatar, joined_at as joinedAt FROM team_members ORDER BY joined_at ASC`
      );
      members = rows || [];
    } else {
      members = mockStore.teamMembers;
    }

    res.json({
      success: true,
      count: members.length,
      data: members,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to fetch team members' });
  }
}

export async function inviteTeamMember(req, res) {
  try {
    const { name, email, role = 'Developer', department = 'Engineering' } = req.body;

    if (!name || !email) {
      res.status(400).json({ success: false, message: 'Name and email are required' });
      return;
    }

    const memberId = `tm-${Date.now()}`;
    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
    const now = new Date().toISOString();

    const newMember = {
      id: memberId,
      name,
      email,
      role,
      status: 'invited',
      department,
      avatar,
      joinedAt: now,
    };

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      await pool.query(
        `INSERT INTO team_members (id, name, email, role, status, department, avatar)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [newMember.id, newMember.name, newMember.email, newMember.role, newMember.status, newMember.department, newMember.avatar]
      );
    } else {
      mockStore.teamMembers.push(newMember);
    }

    res.status(201).json({
      success: true,
      message: 'Team invitation sent successfully',
      data: newMember,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to invite team member' });
  }
}

export async function removeTeamMember(req, res) {
  try {
    const { id } = req.params;

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      await pool.query('DELETE FROM team_members WHERE id = ?', [id]);
    } else {
      const index = mockStore.teamMembers.findIndex(m => m.id === id);
      if (index !== -1) {
        mockStore.teamMembers.splice(index, 1);
      }
    }

    res.json({
      success: true,
      message: 'Team member removed',
      data: { id },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to remove team member' });
  }
}
