import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { studentController } from './student.controller';
import { studentValidations } from './student.validationZod';
const router = express.Router();

// will call controller function

router.get('/', studentController.getAllStudent);
router.get('/:studentId', studentController.getSingleStudent);
router.delete('/:studentId', studentController.deleteStudent);
router.patch('/:studentId', validateRequest(studentValidations.updateStudentValidationSchema), studentController.updateStudent);

export const studentRoutes = router;
