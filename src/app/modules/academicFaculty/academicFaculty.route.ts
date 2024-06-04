
import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';


const router = express.Router();


// will call controller function

router.post('/create-academic-faculty', validateRequest(academicFacultyValidation.AcademicFacultyValidationSchema), AcademicFacultyController.createAcademicFaculty)

router.get('/', AcademicFacultyController.getAllAcademicAcademicFaculty);

router.get('/:id', AcademicFacultyController.getSingleAcademicAcademicFaculty)

router.patch('/:id', validateRequest(academicFacultyValidation.AcademicFacultyUpdateValidationSchema), AcademicFacultyController.updateSingleAcademicAcademicFaculty)


export const academicFacultyRoute = router;
