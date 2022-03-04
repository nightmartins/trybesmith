import express from 'express';
import authJWT from '../validations/authJWT';
import productController from '../controllers/productController';

const productRouter = express.Router();

productRouter.post('/', authJWT, productController.createProduct);

export default productRouter;