import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../error/AppError';
import { AcademicShemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generatedStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};


  //  if password not given , use default password
  userData.password = password || (config.default_password as string);

  //  set student role

  userData.role = 'student';




  //  find academic semester info
  const admissionSemesters: any = await AcademicShemester.findById(payload.admissionSemester);



  //  transection rollBack

  const session = await mongoose.startSession();

  try {

    session.startTransaction()

    // maualy set generated id
    userData.id = await generatedStudentId(admissionSemesters)
    // userData.id = '2030030001'

    //  create a user (transection-1)
    const newUser = await User.create([userData], { session });
    // created student

    if (!newUser.length) {

      throw new AppError(httpStatus.BAD_REQUEST, "failed to create user")


    } else {

      // set id, _id as user
      payload.id = newUser[0].id;
      payload.user = newUser[0]._id; // reference id

      // create a student (transection-2)
      const newStudent = await Student.create([payload], { session });


      if (!newStudent.length) {
        throw new AppError(httpStatus.BAD_REQUEST, "failed to create student")
      }

      await session.commitTransaction();
      await session.endSession()

      return newStudent;
    }



  } catch (err) {
    await session.abortTransaction();
    await session.endSession()

    throw new Error('failed to user student')


  }

};

export const UserServices = {
  createStudentIntoDB,
};
