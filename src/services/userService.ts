import { InUser } from '../interfaces/User';
import createUser from '../models/userModel';

const create = async ({ username, classe, level, password }: InUser) => {
  const response = await createUser({ username, classe, level, password });
  return response;
};
/* Referências:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11/files
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30/files
*/

export default {
  create,
};