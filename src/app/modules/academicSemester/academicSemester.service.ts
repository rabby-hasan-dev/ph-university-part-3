
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicShemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {


    if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
        throw new Error("invalid semester code");
    }


    const result = await AcademicShemester.create(payLoad);
    return result;

};
// retrived all academic semester
const getAllAcademicSemesterIntoDB = async () => {

    const result = await AcademicShemester.find({});
    return result;


};
// retrived Single academic semester
const getSingleAcademicSemesterIntoDB = async (id: string) => {

    const result = await AcademicShemester.findById(id);
    return result;

};

// retrived Single academic semester and update
const updateSingleAcademicSemesterIntoDB = async (id: string, update: Partial<TAcademicSemester>) => {
    if (
        update.name &&
        update.code &&
        academicSemesterNameCodeMapper[update.name] !== update.code
    ) {
        throw new Error('Invalid Semester Code');
    }

    const result = await AcademicShemester.findByIdAndUpdate(id, update, { new: true });
    return result;

};



export const academicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterIntoDB,
    getSingleAcademicSemesterIntoDB,
    updateSingleAcademicSemesterIntoDB
};
