import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  StudentModel,
  TGurdian,
  TLocalGurdian,
  TStudent,
  TUserName,
} from './student.interface';

const userSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'first name is required'],
    trim: true,
    maxlength: [20, 'max length allowed be maximum 20'],
    validate: {
      validator: function (value: any) {
        const capitalize =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return capitalize === value;
      },
      message: '{VALUE} is not capitalized format',
    },
  },
  middleName: {
    type: String,
    required: [true, 'middle name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'last name is requred'],
    trim: true,
    validate: {
      validator: (value: any) => validator.isAlpha(value),
      message: '{VALUE} is not valid  format ',
    },
  },
});

const gurdianSchema = new Schema<TGurdian>({
  fatharName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOcupation: String,
});

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: { type: String, required: true },
  ocupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'user Id is required'],
      unique: true,
      ref: 'User', // connection with User Model / User collection join Student collection
    },

    name: {
      type: userSchema,
      required: [true, 'name is required '],
    },
    gender: {
      type: String,
      required: [true, 'gender is required'],
      enum: {
        values: ['male', 'female'],
        // message: "gender field can only following value 'male', 'female' "
        message: '{VALUE} is not supported',
      },
    },
    // dateOfBirth: { type: Date, },
    dateOfBirth: { type: String, },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: any) => validator.isEmail(value),
        message: '{VALUE} is not valid email type ',
      },
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      required: true,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    gurdian: {
      type: gurdianSchema,
      required: true,
    },
    localGurdian: { type: localGurdianSchema, required: true },
    profileImage: String,
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment' //AcademicSemester
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester' //AcademicSemester
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName}  ${this.name.middleName}  ${this.name.lastName}`;
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDelete: { $ne: true } } });
  next();
});

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
