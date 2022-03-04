import { InProduct } from '../interfaces/Product';
import { createProduct, getProducts } from '../models/productModel';

const create = async ({ name, amount }: InProduct) => {
  const response = await createProduct({ name, amount });
  return response;
};

const getAll = async () => {
  const response = await getProducts();
  console.log('retorno do service', response);
  
  return response;
};

export {
  create,
  getAll,
};