import { getDbPool, isMysqlConnected, mockStore } from '../db/connection.js';

export async function getAllProjects(req, res) {
  try {
    const { status, priority, search, sortBy = 'createdAt', order = 'desc' } = req.query;

    let projects = [];

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      let query = `
        SELECT 
          p.id, p.name, p.description, p.status, p.priority, 
          p.budget, p.spent, p.progress, p.deadline, 
          p.owner_id as ownerId, u.name as ownerName,
          p.created_at as createdAt, p.updated_at as updatedAt
        FROM projects p
        LEFT JOIN users u ON p.owner_id = u.id
        WHERE 1=1
      `;
      const params = [];

      if (status && status !== 'all') {
        query += ' AND p.status = ?';
        params.push(status);
      }
      if (priority && priority !== 'all') {
        query += ' AND p.priority = ?';
        params.push(priority);
      }
      if (search) {
        query += ' AND (p.name LIKE ? OR p.description LIKE ?)';
        params.push(`%${search}%`, `%${search}%`);
      }

      query += ` ORDER BY p.created_at ${order === 'asc' ? 'ASC' : 'DESC'}`;

      const [rows] = await pool.query(query, params);
      projects = rows || [];
    } else {
      projects = [...mockStore.projects];

      if (status && status !== 'all') {
        projects = projects.filter(p => p.status === status);
      }
      if (priority && priority !== 'all') {
        projects = projects.filter(p => p.priority === priority);
      }
      if (search) {
        const queryStr = search.toLowerCase();
        projects = projects.filter(
          p => p.name.toLowerCase().includes(queryStr) || p.description.toLowerCase().includes(queryStr)
        );
      }

      projects.sort((a, b) => {
        if (order === 'asc') {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        }
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }

    res.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to fetch projects' });
  }
}

export async function getProjectById(req, res) {
  try {
    const { id } = req.params;
    let project = null;

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [rows] = await pool.query(
        `SELECT 
          p.id, p.name, p.description, p.status, p.priority, 
          p.budget, p.spent, p.progress, p.deadline, 
          p.owner_id as ownerId, u.name as ownerName,
          p.created_at as createdAt, p.updated_at as updatedAt
        FROM projects p
        LEFT JOIN users u ON p.owner_id = u.id
        WHERE p.id = ?`,
        [id]
      );
      if (rows && rows.length > 0) {
        project = rows[0];
      }
    } else {
      project = mockStore.projects.find(p => p.id === id) || null;
    }

    if (!project) {
      res.status(404).json({ success: false, message: 'Project not found' });
      return;
    }

    res.json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to get project' });
  }
}

export async function createProject(req, res) {
  try {
    const { name, description, status = 'planning', priority = 'medium', budget = 0, deadline } = req.body;

    if (!name) {
      res.status(400).json({ success: false, message: 'Project name is required' });
      return;
    }

    const projectId = `proj-${Date.now()}`;
    const ownerId = req.user?.userId || 'usr-admin-1';
    const now = new Date().toISOString();

    const newProject = {
      id: projectId,
      name,
      description: description || '',
      status,
      priority,
      budget: Number(budget) || 0,
      spent: 0,
      progress: 0,
      deadline: deadline || new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split('T')[0],
      ownerId,
      ownerName: req.user?.email ? req.user.email.split('@')[0] : 'Admin',
      createdAt: now,
      updatedAt: now,
    };

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      await pool.query(
        `INSERT INTO projects (id, name, description, status, priority, budget, spent, progress, deadline, owner_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          newProject.id,
          newProject.name,
          newProject.description,
          newProject.status,
          newProject.priority,
          newProject.budget,
          newProject.spent,
          newProject.progress,
          newProject.deadline,
          newProject.ownerId,
        ]
      );

      await pool.query(
        'INSERT INTO activity_logs (id, user_id, user_name, action, entity, details, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [`act-${Date.now()}`, ownerId, newProject.ownerName, 'Created new project', newProject.name, 'project', now]
      );
    } else {
      mockStore.projects.unshift(newProject);
      mockStore.activityLogs.unshift({
        id: `act-${Date.now()}`,
        userId: ownerId,
        userName: newProject.ownerName || 'Admin',
        action: 'Created new project',
        entity: newProject.name,
        details: 'Initial setup',
        timestamp: now,
      });
    }

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: newProject,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to create project' });
  }
}

export async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const { name, description, status, priority, budget, spent, progress, deadline } = req.body;

    const now = new Date().toISOString();

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [existing] = await pool.query('SELECT * FROM projects WHERE id = ?', [id]);
      if (!existing || existing.length === 0) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
      }

      await pool.query(
        `UPDATE projects 
         SET name = COALESCE(?, name),
             description = COALESCE(?, description),
             status = COALESCE(?, status),
             priority = COALESCE(?, priority),
             budget = COALESCE(?, budget),
             spent = COALESCE(?, spent),
             progress = COALESCE(?, progress),
             deadline = COALESCE(?, deadline),
             updated_at = ?
         WHERE id = ?`,
        [name, description, status, priority, budget, spent, progress, deadline, now, id]
      );

      const [updated] = await pool.query(
        `SELECT 
          p.id, p.name, p.description, p.status, p.priority, 
          p.budget, p.spent, p.progress, p.deadline, 
          p.owner_id as ownerId, u.name as ownerName,
          p.created_at as createdAt, p.updated_at as updatedAt
        FROM projects p
        LEFT JOIN users u ON p.owner_id = u.id
        WHERE p.id = ?`,
        [id]
      );

      await pool.query(
        'INSERT INTO activity_logs (id, user_id, user_name, action, entity, details, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [`act-${Date.now()}`, req.user?.userId || 'usr-admin-1', req.user?.email ? req.user.email.split('@')[0] : 'User', 'Updated project parameters', updated[0]?.name || id, 'project', now]
      );

      res.json({
        success: true,
        message: 'Project updated successfully',
        data: updated[0],
      });
    } else {
      const index = mockStore.projects.findIndex(p => p.id === id);
      if (index === -1) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
      }

      mockStore.projects[index] = {
        ...mockStore.projects[index],
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(status !== undefined && { status }),
        ...(priority !== undefined && { priority }),
        ...(budget !== undefined && { budget: Number(budget) }),
        ...(spent !== undefined && { spent: Number(spent) }),
        ...(progress !== undefined && { progress: Number(progress) }),
        ...(deadline !== undefined && { deadline }),
        updatedAt: now,
      };

      mockStore.activityLogs.unshift({
        id: `act-${Date.now()}`,
        userId: req.user?.userId || 'usr-admin-1',
        userName: req.user?.email ? req.user.email.split('@')[0] : 'User',
        action: 'Updated project parameters',
        entity: mockStore.projects[index].name,
        details: 'Project fields updated',
        timestamp: now,
      });

      res.json({
        success: true,
        message: 'Project updated successfully',
        data: mockStore.projects[index],
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to update project' });
  }
}

export async function deleteProject(req, res) {
  try {
    const { id } = req.params;

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [existing] = await pool.query('SELECT name FROM projects WHERE id = ?', [id]);
      if (!existing || existing.length === 0) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
      }

      await pool.query('DELETE FROM projects WHERE id = ?', [id]);

      await pool.query(
        'INSERT INTO activity_logs (id, user_id, user_name, action, entity, details, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [`act-${Date.now()}`, req.user?.userId || 'usr-admin-1', req.user?.email ? req.user.email.split('@')[0] : 'User', 'Deleted project', existing[0].name, 'project', new Date().toISOString()]
      );
    } else {
      const index = mockStore.projects.findIndex(p => p.id === id);
      if (index === -1) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
      }

      const projectName = mockStore.projects[index].name;
      mockStore.projects.splice(index, 1);

      mockStore.activityLogs.unshift({
        id: `act-${Date.now()}`,
        userId: req.user?.userId || 'usr-admin-1',
        userName: req.user?.email ? req.user.email.split('@')[0] : 'User',
        action: 'Deleted project',
        entity: projectName,
        details: 'Project removed',
        timestamp: new Date().toISOString(),
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully',
      data: { id },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to delete project' });
  }
}
