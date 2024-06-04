
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentSevices } from './student.service';


const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentSevices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Student retrived successfully',
    data: result,
  });
});

//  GET ALL STUDENT DATA
const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentSevices.getStudentFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Student retrived successfully',
    data: result,
  });
});


//  DELETE  SPECIFIC STUDENT DATA

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentSevices.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'student is deleted successfully',
    data: result,
  });
});

//  UPDATE  SPECIFIC STUDENT DATA
const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentSevices.updateStudentFromDB(studentId
    , student
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'student is update successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
