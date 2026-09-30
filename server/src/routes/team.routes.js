import { Router } from 'express';
import { getTeamMembers, inviteTeamMember, removeTeamMember } from '../controllers/team.controller.js';

const router = Router();

router.get('/', getTeamMembers);
router.post('/invite', inviteTeamMember);
router.delete('/:id', removeTeamMember);

export default router;
