import express from 'express';
import userRouter from './routes/userRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use('/login', loginRouter);

export default app;
