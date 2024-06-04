import { Router } from 'express';
import { academicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';
import { academicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { studentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes,
    },
    {
        path: '/students',
        route: studentRoutes,
    },
    {
        path: '/academic-semester',
        route: academicSemesterRoute,
    },
    {
        path: '/academic-faculties',
        route: academicFacultyRoute,
    },
    {
        path: '/acdemic-department',
        route: academicDepartmentRoute,
    },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));


export default router;
