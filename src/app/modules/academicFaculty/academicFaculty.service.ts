import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";



const createAcademicFacultyFromDB = async (data: TAcademicFaculty) => {
    const result = await AcademicFaculty.create(data);
    return result;
};

const getAcademicFacultiesFromDB = async () => {
    const result = await AcademicFaculty.find();
    return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
    const result = await AcademicFaculty.findById(id);

    return result;
};

const updateSingleAcademicFacultyFromDB = async (id: string, update: TAcademicFaculty) => {

    const result = await AcademicFaculty.findByIdAndUpdate(id, update, { new: true });
    return result;

};



export const AcademicFacultySevices = {
    createAcademicFacultyFromDB,
    getAcademicFacultiesFromDB,
    getSingleAcademicFacultyFromDB,
    updateSingleAcademicFacultyFromDB
};
