import { Request, Response, NextFunction } from 'express';
import { create, getAll } from '../services/productService';
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
  const item = await create({ name, amount });
  console.log(item);
  return res.status(201).json(item);
};

const getProducts = async (_req: Request, res: Response) => {
  const response = await getAll();
  console.log('retorno do service', response);
  
  return res.status(200).json(response);
};

export {
  createProduct,
  getProducts,
};