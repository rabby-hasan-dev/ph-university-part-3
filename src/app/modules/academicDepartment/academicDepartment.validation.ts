import { string, z } from "zod";


export const AcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: string({
            invalid_type_error: "academic Department must be string",
            required_error: "name is required "
        }),
        academicFaculty: string({
            invalid_type_error: "academic Department must be string",
            required_error: "name is required "
        }).optional(),
    })
})

export const AcademicDepartmentUpdateValidationSchema = z.object({
    body: z.object({
        name: string({
            invalid_type_error: "academic Department must be string",
            required_error: "name is required "
        }),
        academicFaculty: string({
            invalid_type_error: "academic Department must be string",
            required_error: "name is required "
        }).optional(),
    })
})

export const AcademicDepartmentValidation = {
    AcademicDepartmentValidationSchema,
    AcademicDepartmentUpdateValidationSchema
}