import { Router } from 'express';
import { getAnalyticsSummary, getActivityLogs } from '../controllers/analytics.controller.js';

const router = Router();

router.get('/summary', getAnalyticsSummary);
router.get('/activity', getActivityLogs);

export default router;
