import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { create, login } from '../services/userService';
import { userSchema, loginSchema } from '../validations/schemas';

const createUser = async (req: Request, res: Response, _next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = userSchema.validate({ username, classe, level, password });

  if (error) {
    const errorMessage = error?.message;
    if (errorMessage.includes('required')) {
      return res.status(400).json({ error: errorMessage });
    }
    return res.status(422).json({ error: errorMessage });
  }
  const { id } = await create({ username, classe, level, password });
  const secret = 'segredo';
  const token = jwt.sign({ id }, secret);

  return res.status(201).json({ token });
};
/* Referências:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30
https://github.com/tryber/sd-014-b-project-trybesmith/pull/38
Correção do retorno da função feita com a ajuda do aluno Rodolfo Braga
*/

const userLogin = async (req: Request, res: Response, _next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = loginSchema.validate({ username, password });

  if (error) {
    const errorMessage = error?.message;
    if (errorMessage.includes('required')) {
      return res.status(400).json({ error: errorMessage });
    }
  }

  const loginResponse = await login({ username, password });

  const loginData = Object.values(loginResponse)[0];
  
  if (!loginData || loginData === undefined) {
    return res.status(401).json({ error: 'Username or password invalid' });
  }
  const secret = 'segredo';
  const token = jwt.sign({ id: loginData.id, username: loginData.username }, secret); 
  /* Referência para conseguir pegar o id corretamente:
  https://github.com/tryber/sd-014-b-project-trybesmith/pull/38 */ 

  return res.status(200).json({ token });
};

export {
  createUser,
  userLogin,
};