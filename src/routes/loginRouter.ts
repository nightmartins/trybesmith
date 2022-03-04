import express from 'express';
import { userLogin } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/', userLogin);

export default userRouter;