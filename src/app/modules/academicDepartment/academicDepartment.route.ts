
import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academincDepartment.controller';



const router = express.Router();


// will call controller function

router.post('/create-academic-Department', validateRequest(AcademicDepartmentValidation.AcademicDepartmentValidationSchema), AcademicDepartmentController.createAcademicDepartment)

router.get('/', AcademicDepartmentController.getAllAcademicDepartment);

router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartment)

router.patch('/:id', validateRequest(AcademicDepartmentValidation.AcademicDepartmentUpdateValidationSchema), AcademicDepartmentController.updateSingleAcademicDepartment)


export const academicDepartmentRoute = router;
