import { Router } from 'express';
import { getDbStatus } from '../db/connection.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'FlipCode SaaS Express Backend',
    version: '1.0.0',
    uptimeSeconds: Math.floor(process.uptime()),
    database: getDbStatus(),
  });
});

router.get('/db-status', (req, res) => {
  res.json({
    success: true,
    data: getDbStatus(),
  });
});

export default router;
