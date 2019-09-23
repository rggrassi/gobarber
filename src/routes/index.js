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
import scheduleController from '../controllers/ScheduleController';
import notificationController from '../controllers/NotificationController';
import availableController from '../controllers/AvailableController';
import auth from '../middlewares/auth';

router.post('/users', userController.store.bind(null, User));
router.post('/session', sessionController.store.bind(null, { User, File }));

router.use(auth);

router.put('/users', userController.update.bind(null, { User, File }));
router.get('/providers', providerController.index.bind(null, { User, File }));

router.post('/appointments', appointmentController.store.bind(null, { Appointment, User }));
router.get('/appointments', appointmentController.index.bind(null, { Appointment, User, File }));
router.delete('/appointments/:id', appointmentController.remove.bind(null, { Appointment, User } ));

router.get('/schedule', scheduleController.index.bind(null, { Appointment, User }));
router.get('/notifications', notificationController.index);
router.put('/notifications/:id', notificationController.update);
router.get('/available/:providerId', availableController.index.bind(null, Appointment));
router.post('/files', multer(multerConfig).single('file'), fileController.store.bind(null, File));

export default router;