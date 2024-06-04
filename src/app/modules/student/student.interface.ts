import { Model, Types } from 'mongoose';

export type TGurdian = {
  fatharName: string;
  fatherOcupation: string;
  fatherContactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGurdian = {
  name: string;
  ocupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId; // this line important
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  // dateOfBirth?: Date;
  dateOfBirth?: string;
  email: string;
  avatar?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: TGurdian;
  localGurdian: TLocalGurdian;
  profileImage?: string;
  academicDepartment: Types.ObjectId;
  admissionSemester: Types.ObjectId;
  isDelete: boolean;
};

// for creating static
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// for crating instance
//  creating a custom instance method
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;
