import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'segredo';
const authJWT = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({ error: 'Token not found' });
    }

    jwt.verify(authorization, secret);
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default authJWT;

/*
Referência para criação da função:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/38
Referência para correção da função:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/42
*/