import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicSemesterServices } from './academicSemester.service';


const createAcademicSemester = catchAsync(async (req, res) => {


    const result = await academicSemesterServices.createAcademicSemesterIntoDB(req.body

    );
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'Academic semester created successfully',
        data: result,
    });

})
//  retrived academic semester
const getAllAcademicSemester = catchAsync(async (req, res) => {


    const result = await academicSemesterServices.getAllAcademicSemesterIntoDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic semester retrived successfully',
        data: result,
    });

})

//  retrived single academic semester
const getSingleAcademicSemester = catchAsync(async (req, res) => {

    const id = req.params.id;

    const result = await academicSemesterServices.getSingleAcademicSemesterIntoDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic semester retrived successfully',
        data: result,
    });

})
//  update single academic semester
const updateSingleAcademicSemester = catchAsync(async (req, res) => {

    const id = req.params.id;
    const update = req.body;

    const result = await academicSemesterServices.updateSingleAcademicSemesterIntoDB(id, update);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic semester update successfully',
        data: result,
    });

})

export const academicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateSingleAcademicSemester
};
