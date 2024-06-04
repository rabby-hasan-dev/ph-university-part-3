import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { TUser } from './user.interface';

const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function (next) {
  // hashing password and save into DB
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.saltRound));

  next();
});

// post save middleware

UserSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

export const User = model<TUser>('User', UserSchema);
