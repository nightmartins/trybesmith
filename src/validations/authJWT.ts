import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';

const secret = 'segredo';

export const authJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    jwt.verify(token, secret) as JwtPayload;
    next();
  } catch (error: any) {
    if (error.message === 'invalid token') {
      return res.status(401).json({ error: 'Invalid token' });
    }
  }
};

export default authJWT;
/*
Referência para correção da função:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11
*/