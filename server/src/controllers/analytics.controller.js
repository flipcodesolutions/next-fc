import { getDbPool, isMysqlConnected, mockStore } from '../db/connection.js';

export async function getAnalyticsSummary(req, res) {
  try {
    let projects = mockStore.projects;

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [rows] = await pool.query('SELECT status, budget, spent FROM projects');
      if (rows) {
        projects = rows;
      }
    }

    const total = projects.length;
    const inProgress = projects.filter(p => p.status === 'in_progress').length;
    const completed = projects.filter(p => p.status === 'completed').length;
    const planning = projects.filter(p => p.status === 'planning').length;
    const paused = projects.filter(p => p.status === 'paused').length;

    const totalBudget = projects.reduce((acc, p) => acc + (Number(p.budget) || 0), 0);
    const totalSpent = projects.reduce((acc, p) => acc + (Number(p.spent) || 0), 0);

    const summary = {
      mrr: 48920,
      mrrGrowth: 14.8,
      activeUsers: 2480,
      activeUsersGrowth: 22.4,
      conversionRate: 3.85,
      conversionRateGrowth: 0.9,
      serverUptime: 99.98,
      revenueHistory: [
        { month: 'Apr', revenue: 32000, expenses: 14000, profit: 18000 },
        { month: 'May', revenue: 36500, expenses: 15200, profit: 21300 },
        { month: 'Jun', revenue: 41200, expenses: 16800, profit: 24400 },
        { month: 'Jul', revenue: 39800, expenses: 16100, profit: 23700 },
        { month: 'Aug', revenue: 45400, expenses: 17500, profit: 27900 },
        { month: 'Sep', revenue: 48920, expenses: 18200, profit: 30720 },
      ],
      userGrowth: [
        { date: 'Mon', users: 1840, signups: 45 },
        { date: 'Tue', users: 1980, signups: 58 },
        { date: 'Wed', users: 2120, signups: 62 },
        { date: 'Thu', users: 2280, signups: 74 },
        { date: 'Fri', users: 2390, signups: 88 },
        { date: 'Sat', users: 2430, signups: 42 },
        { date: 'Sun', users: 2480, signups: 51 },
      ],
      trafficSources: [
        { name: 'Direct Search', percentage: 42, visitors: 18400 },
        { name: 'Developer Referrals', percentage: 28, visitors: 12260 },
        { name: 'Social / Tech Media', percentage: 18, visitors: 7890 },
        { name: 'Organic SEO', percentage: 12, visitors: 5250 },
      ],
      projectStats: {
        total,
        inProgress,
        completed,
        planning,
        paused,
      },
    };

    res.json({
      success: true,
      data: summary,
      meta: {
        totalBudget,
        totalSpent,
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to fetch analytics' });
  }
}

export async function getActivityLogs(req, res) {
  try {
    let logs = [];

    if (isMysqlConnected()) {
      const pool = await getDbPool();
      const [rows] = await pool.query(
        `SELECT 
          id, user_id as userId, user_name as userName, 
          action, entity, details, created_at as timestamp 
        FROM activity_logs 
        ORDER BY id DESC LIMIT 20`
      );
      logs = rows || [];
    } else {
      logs = mockStore.activityLogs.slice(0, 20);
    }

    res.json({
      success: true,
      count: logs.length,
      data: logs,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to fetch activity logs' });
  }
}
