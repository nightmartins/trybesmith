import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import { InUser } from '../interfaces/User';
import userService from '../services/userService';
import UserSchema from '../validations/schemas';

const createUser = async (req: Request, res: Response, _next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = UserSchema.validate({ username, classe, level, password });

  if (error) {
    const errorMessage = error?.message;
    if (errorMessage.includes('required')) {
      // return { status: 400, message: errorMessage }
      return res.status(400).json({ error: errorMessage });
    }
    // return { status: 422, message: errorMessage }
    return res.status(422).json({ error: errorMessage });
  }
  const { id } = await userService.create({ username, classe, level, password });
  const secret = 'segredo';
  const token = jwt.sign({ id }, secret);

  return res.status(201).json({ token });
};

export default {
  createUser,
};