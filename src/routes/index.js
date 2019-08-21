import { Router } from 'express';
const router = new Router();
import { User } from '../database';
import userController from '../controllers/UserController';
import sessionController from '../controllers/SessionController';

router.post('/user', userController.store.bind(null, User))
router.post('/session', sessionController.store.bind(null, User))

export default router;