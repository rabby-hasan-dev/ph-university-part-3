
import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

// will call controller function

router.post('/create-academic-semester', validateRequest(academicSemesterValidation.createAcademicSemesterValidation), academicSemesterController.createAcademicSemester)

router.get('/retrived-academic-semester', academicSemesterController.getAllAcademicSemester);
router.get('/retrived-academic-semester/:id', academicSemesterController.getSingleAcademicSemester)
router.patch('/retrived-academic-semester/:id', validateRequest(academicSemesterValidation.updateAcademicSemesterValidation), academicSemesterController.updateSingleAcademicSemester)


export const academicSemesterRoute = router;
