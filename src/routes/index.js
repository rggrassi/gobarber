import { Router } from 'express';
const router = new Router();
import { User } from '../database';
import userController from '../controllers/UserController';
import sessionController from '../controllers/SessionController';
import auth from '../middlewares/auth';

router.post('/user', userController.store.bind(null, User))
router.post('/session', sessionController.store.bind(null, User))

router.use(auth);

export default router;