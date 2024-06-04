import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../error/AppError';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';
import { Student } from './student.model';

const getStudentFromDB = async () => {
  const result = await Student.find().populate({
    path: 'academicDepartment',
    populate: {
      path: "academicFaculty"
    }
  }).populate('admissionSemester');
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id }).populate('academicDepartment').populate('admissionSemester');

  const result = await Student.aggregate([
    {
      $match: { id: id },
    },
  ]);
  return result;
};

const deleteStudentFromDB = async (id: string) => {


  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    //  transaction-1
    const deletedStudent = await Student.findOneAndUpdate({ id }, { isDelete: true }, { new: true, session });

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Student delete failed");
    }

    //  transaction-2
    const deletedUser = await User.findOneAndUpdate({ id }, { isDelete: true }, { new: true, session });

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "user delete failed");
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;








  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("sudent delete failed!")
  }






};

// UPDATE SINGLE STUDENT DATA
const updateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {

  const { name, gurdian, localGurdian, ...remainingStudentData } = payload;


  const modifiedData: Record<string, unknown> = { ...remainingStudentData };


  if (name && Object.keys(name).length) {

    for (const [key, value] of Object.entries(name)) {
      modifiedData[`name.${key}`] = value;
    }

  }

  if (gurdian && Object.keys(gurdian).length) {

    for (const [key, value] of Object.entries(gurdian)) {
      modifiedData[`gurdian.${key}`] = value;
    }

  }

  if (localGurdian && Object.keys(localGurdian).length) {

    for (const [key, value] of Object.entries(localGurdian)) {
      modifiedData[`localGurdian.${key}`] = value;
    }

  }



  const result = await Student.findOneAndUpdate({ id }, modifiedData, { new: true, runValidators: true });



  return result;
};

export const StudentSevices = {
  getStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentFromDB
};
