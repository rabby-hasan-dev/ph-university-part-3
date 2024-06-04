import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";




const createAcademicDepartmentFromDB = async (data: TAcademicDepartment) => {

    const result = await AcademicDepartment.create(data);
    return result;
};

const getAcademicDepartmentsFromDB = async () => {
    const result = await AcademicDepartment.find().populate('academicFaculty');
    return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
    const result = await AcademicDepartment.findById(id).populate('academicFaculty');

    return result;
};

const updateSingleAcademicDepartmentFromDB = async (id: string, update: TAcademicDepartment) => {

    const result = await AcademicDepartment.findOneAndUpdate({ _id: id }, update, { new: true });
    return result;

};



export const AcademicDepartmentSevices = {
    createAcademicDepartmentFromDB,
    getAcademicDepartmentsFromDB,
    getSingleAcademicDepartmentFromDB,
    updateSingleAcademicDepartmentFromDB
};
