import { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/project.controller.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', authenticateToken, createProject);
router.put('/:id', authenticateToken, updateProject);
router.delete('/:id', authenticateToken, deleteProject);

export default router;
