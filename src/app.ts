import express from 'express';
import userRouter from './routes/userRouter';
import loginRouter from './routes/loginRouter';
import productRouter from './routes/productRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use('/login', loginRouter);

app.use('/products', productRouter);

export default app;
