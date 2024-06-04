import { Request, Response } from 'express';
import httpStatus from 'http-status';

const notFoundRoute = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    succes: false,
    message: 'API NOT FOUND !',
    error: '',
  });
};

export default notFoundRoute;
