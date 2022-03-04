import express from 'express';
import authJWT from '../validations/authJWT';
import { createProduct, getProducts } from '../controllers/productController';

const productRouter = express.Router();

productRouter.post('/', authJWT, createProduct);
productRouter.get('/', authJWT, getProducts);

export default productRouter;