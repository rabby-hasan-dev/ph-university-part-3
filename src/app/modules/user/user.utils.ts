

import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";


const findLastStudentId = async () => {

    const lastStudent = await User.findOne(
        { role: 'student' }, { id: 1, _id: 0 }
    ).sort({ createdAt: -1 }).lean();
    console.log(lastStudent);


    return lastStudent?.id ? lastStudent.id : undefined;
}




// year semester code 4 digit number
export const generatedStudentId = async (payload: TAcademicSemester) => {

    let currentId = (0).toString();

    // 2030 02 0001

    const lastStudent = await findLastStudentId();
    const lastStudentSemesterYear = lastStudent?.substring(0, 4);
    const lastStudentSemesterCode = lastStudent?.substring(4, 6);
    const currentStudentSemesterYear = payload.year;
    const currentStudentSemesterCode = payload.code;
    console.log(lastStudent);

    if (lastStudent && lastStudentSemesterYear === currentStudentSemesterYear && lastStudentSemesterCode === currentStudentSemesterCode) {
        currentId = lastStudent.substring(6);

    }




    let increamentId = (Number(currentId) + 1).toString().padStart(4, '0');
    increamentId = `${payload.year}${payload.code}${increamentId}`

    return increamentId;


}