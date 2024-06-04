import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundRoute from './app/middleware/notFound';
import router from './app/routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

//  application routes
app.use('/api/v1', router);

//  Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// Global Error
app.use(globalErrorHandler);
// not fount route
app.use(notFoundRoute);

export default app;
