import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { studentValidations } from '../student/student.validationZod';
import { userController } from './user.controller';

const router = express.Router();





router.post('/create-student', validateRequest(studentValidations.studentValidationSchema), userController.createStudent);

// router.post('/users/createdFaculty',)
// router.post('/users/createdAdmin',)

export const userRoutes = router;
