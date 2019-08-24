import { Router } from 'express';
const router = new Router();
import multer from 'multer';
import multerConfig from '../config/multer';
import { User, File, Appointment } from '../database';
import userController from '../controllers/UserController';
import sessionController from '../controllers/SessionController';
import fileController from '../controllers/FileController';
import providerController from '../controllers/ProviderController';
import appointmentController from '../controllers/AppointmentController';
import auth from '../middlewares/auth';

router.post('/users', userController.store.bind(null, User));
router.post('/session', sessionController.store.bind(null, User));

router.use(auth);

router.put('/users', userController.update.bind(null, User));
router.get('/providers', providerController.index.bind(null, { User, File }));
router.post('/appointments', appointmentController.store.bind(null, { Appointment, User }));
router.post('/files', multer(multerConfig).single('file'), fileController.store.bind(null, File));


export default router;