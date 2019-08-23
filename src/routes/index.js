import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';

const router = new Router();
import { User } from '../database';
import userController from '../controllers/UserController';
import sessionController from '../controllers/SessionController';
import auth from '../middlewares/auth';

router.post('/users', userController.store.bind(null, User));
router.post('/session', sessionController.store.bind(null, User));

router.use(auth);

router.put('/users', userController.update);
router.post('/files', multer(multerConfig).single('file'), (req, res) => {
  return res.json({ ok: true });
})

export default router;