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
  console.log('log do model', createdProduct);
  
  return createdProduct;
};
/* Referências:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30
*/

// const userLogin = async ({ username, password }: InLogin) => {
//   const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ? LIMIT 1';
//   const [rows] = await connection.execute<ResultSetHeader>(query, [username, password]);
//   console.log('Retorno do model', rows);
//   return rows;
// };

export default {
  createProduct,
};