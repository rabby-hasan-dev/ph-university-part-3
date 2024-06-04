import { AcademicSemesterNameCodeMapper, TAcademicSemesterCode, TAcademicSemesterName, TMonths } from "./academicSemester.interface";

export const months: TMonths[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



export const academicSemesterNameSchema: TAcademicSemesterName[] = ['Autumn', 'Summer', 'Fall'];
export const academicSemesterCodeSchema: TAcademicSemesterCode[] = ['01', '02', '03'];


//  important 
export const academicSemesterNameCodeMapper: AcademicSemesterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03'
}



// export const AcademicSemesterConstant = {
//     months,
//     academicSemesterCodeSchema,
//     academicSemesterNameSchema,
// }