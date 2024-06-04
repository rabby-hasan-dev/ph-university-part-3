import { string, z } from "zod";


export const AcademicFacultyValidationSchema = z.object({
    body: z.object({
        name: string({
            invalid_type_error: "academic faculty must be string"
        })
    })
})

export const AcademicFacultyUpdateValidationSchema = z.object({
    body: z.object({
        name: string({
            invalid_type_error: "academic faculty must be string"
        })
    })
})

export const academicFacultyValidation = {
    AcademicFacultyValidationSchema,
    AcademicFacultyUpdateValidationSchema
}