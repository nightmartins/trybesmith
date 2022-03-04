import express from 'express';
import userRouter from './routes/userRouter';
// import createUser from './models/userModel';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

export default app;
