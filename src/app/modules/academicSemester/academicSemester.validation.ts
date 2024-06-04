import { z } from 'zod';
import { academicSemesterCodeSchema, academicSemesterNameSchema, months } from './academicSemester.constant';



const createAcademicSemesterValidation = z.object({

    body: z.object({
        name: z.enum([...academicSemesterNameSchema] as [string, ...string[]]),
        code: z.enum([...academicSemesterCodeSchema] as [string, ...string[]]),
        // year: z.date(),
        year: z.string(),
        startMonth: z.enum([...months] as [string, ...string[]]),
        endMonth: z.enum([...months] as [string, ...string[]])


    })


})
const updateAcademicSemesterValidation = z.object({

    body: z.object({
        name: z.enum([...academicSemesterNameSchema] as [string, ...string[]]).optional(),
        code: z.enum([...academicSemesterCodeSchema] as [string, ...string[]]).optional(),
        // year: z.date(),
        year: z.string().optional(),
        startMonth: z.enum([...months] as [string, ...string[]]).optional(),
        endMonth: z.enum([...months] as [string, ...string[]]).optional(),


    })


})


export const academicSemesterValidation = {
    createAcademicSemesterValidation,
    updateAcademicSemesterValidation
}