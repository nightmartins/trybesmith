import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InProduct } from '../interfaces/Product';

const createProduct = async ({ name, amount }: InProduct) => {
  const query = `INSERT INTO 
  Trybesmith.Products (name, amount) 
  VALUES (?, ?)`;
  const values = [name, amount];
  const [rows] = await connection.execute<ResultSetHeader>(query, values);
  const createdProduct = { item: { id: rows.insertId, name, amount } };
  
  return createdProduct;
};

const getProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [rows] = await connection.execute(query);
  console.log('Retorno do model', rows);
  return rows;
};

export {
  createProduct,
  getProducts,
};