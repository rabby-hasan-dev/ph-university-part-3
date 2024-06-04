import { Schema, model } from "mongoose";
import { academicSemesterCodeSchema, academicSemesterNameSchema, months } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";




const AcademicShemesterSchema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        required: true,
        enum: academicSemesterNameSchema,
    },
    code: {
        type: String,
        enum: academicSemesterCodeSchema,
        required: true
    },

    year: {
        // type: Date,
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        required: true,
        enum: months
    },
    endMonth: {
        type: String,
        required: true,
        enum: months
    },

}, { timestamps: true })



AcademicShemesterSchema.pre('save', async function (next) {

    const isSemesterExists = await AcademicShemester.findOne({
        name: this.name,
        year: this.year
    })

    if (isSemesterExists) {
        throw new Error('Semester is already exists!')
    }

})

export const AcademicShemester = model<TAcademicSemester>('AcademicSemester', AcademicShemesterSchema)