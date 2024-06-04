import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentSevices } from "./academicDepartment.service";



const createAcademicDepartment = catchAsync(async (req, res) => {


    const result = await AcademicDepartmentSevices.createAcademicDepartmentFromDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'Academic faculty created successfully',
        data: result,
    });

})
//  retrived academic faculty
const getAllAcademicDepartment = catchAsync(async (req, res) => {


    const result = await AcademicDepartmentSevices.getAcademicDepartmentsFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic faculty retrived successfully',
        data: result,
    });

})

//  retrived single academic faculty
const getSingleAcademicDepartment = catchAsync(async (req, res) => {

    const id = req.params.id;


    const result = await AcademicDepartmentSevices.getSingleAcademicDepartmentFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic faculty retrived successfully',
        data: result,
    });

})
//  update single academic Department
const updateSingleAcademicDepartment = catchAsync(async (req, res) => {

    const id = req.params.id;
    const update = req.body;

    const result = await AcademicDepartmentSevices.updateSingleAcademicDepartmentFromDB(id, update);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        succcess: true,
        message: 'academic Department update successfully',
        data: result,
    });

})

export const AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateSingleAcademicDepartment
};
