import { Request, Response, NextFunction } from 'express';
import productService from '../services/productService';
import { productSchema } from '../validations/schemas';

const createProduct = async (req: Request, res: Response, _next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = productSchema.validate({ name, amount });

  if (error) {
    const errorMessage = error?.message;
    if (errorMessage.includes('required')) {
      return res.status(400).json({ error: errorMessage });
    }
    return res.status(422).json({ error: errorMessage });
  }
  const item = await productService.create({ name, amount });
  console.log(item);
  return res.status(201).json(item);
};
/* Referências:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30
https://github.com/tryber/sd-014-b-project-trybesmith/pull/38
Correção do retorno da função feita com a ajuda do aluno Rodolfo Braga
*/

// const userLogin = async (req: Request, res: Response, _next: NextFunction) => {
//   const { username, password } = req.body;
//   const { error } = loginSchema.validate({ username, password });

//   if (error) {
//     const errorMessage = error?.message;
//     if (errorMessage.includes('required')) {
//       return res.status(400).json({ error: errorMessage });
//     }
//   }

//   const loginResponse = await login({ username, password });
//   console.log('retorno loginResponse', loginResponse);

//   const loginData = Object.values(loginResponse)[0];
//   console.log('retorno loginData', loginData);
  
//   if (!loginData || loginData === undefined) {
//     return res.status(401).json({ error: 'Username or password invalid' });
//   }
//   const secret = 'segredo';
//   const token = jwt.sign({ id: loginData.id, username: loginData.username }, secret); 
//   /* Referência para conseguir pegar o id corretamente:
//   https://github.com/tryber/sd-014-b-project-trybesmith/pull/38 */ 

//   return res.status(200).json({ token });
// };

export default {
  createProduct,
};