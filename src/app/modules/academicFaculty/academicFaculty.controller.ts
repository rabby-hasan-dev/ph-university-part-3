import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultySevices } from "./academicFaculty.service";


const createAcademicFaculty = catchAsync(async (req, res) => {


    const result = await AcademicFacultySevices.createAcademicFacultyFromDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'Academic faculty created successfully',
        data: result,
    });

})
//  retrived academic faculty
const getAllAcademicAcademicFaculty = catchAsync(async (req, res) => {


    const result = await AcademicFacultySevices.getAcademicFacultiesFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic faculty retrived successfully',
        data: result,
    });

})

//  retrived single academic faculty
const getSingleAcademicAcademicFaculty = catchAsync(async (req, res) => {

    const id = req.params.id;
   

    const result = await AcademicFacultySevices.getSingleAcademicFacultyFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic faculty retrived successfully',
        data: result,
    });

})
//  update single academic faculty
const updateSingleAcademicAcademicFaculty = catchAsync(async (req, res) => {

    const id = req.params.id;
    const update = req.body;

    const result = await AcademicFacultySevices.updateSingleAcademicFacultyFromDB(id, update);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic faculty update successfully',
        data: result,
    });

})

export const AcademicFacultyController = {
    createAcademicFaculty,
    getAllAcademicAcademicFaculty,
    getSingleAcademicAcademicFaculty,
    updateSingleAcademicAcademicFaculty
};
