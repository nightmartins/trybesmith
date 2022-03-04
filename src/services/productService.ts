import { InProduct } from '../interfaces/Product';
import productModel from '../models/productModel';

const create = async ({ name, amount }: InProduct) => {
  const response = await productModel.createProduct({ name, amount });
  console.log('log do service', response);
  
  return response;
};
/* Referências:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30
*/

// const login = async ({ username, password }: InLogin) => {
//   const response = await userLogin({ username, password });
//   console.log('retorno do service', response);
  
//   return response;
// };

export default {
  create,
};