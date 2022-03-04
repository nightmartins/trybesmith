import { InUser } from '../interfaces/User';
import InLogin from '../interfaces/Login';
import { createUser, userLogin } from '../models/userModel';

const create = async ({ username, classe, level, password }: InUser) => {
  const response = await createUser({ username, classe, level, password });
  return response;
};
/* Referências:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30
*/

const login = async ({ username, password }: InLogin) => {
  const response = await userLogin({ username, password });
  console.log('retorno do service', response);
  
  return response;
};

export {
  create,
  login,
};