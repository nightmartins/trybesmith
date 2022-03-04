import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InUser, InCreateUser } from '../interfaces/User';
import InLogin from '../interfaces/Login';

const createUser = async ({ username, classe, level, password }: InUser) => {
  const query = `INSERT INTO 
  Trybesmith.Users (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];
  const [rows] = await connection.execute<ResultSetHeader>(query, values);
  const createdUser = { id: rows.insertId, username, classe, level, password } as InCreateUser;
  return createdUser;
};
/* Referências:
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30
*/

const userLogin = async ({ username, password }: InLogin) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ? LIMIT 1';
  const [rows] = await connection.execute<ResultSetHeader>(query, [username, password]);
  return rows;
};

const getUser = async (id: number) => {
  const query = 'SELECT * FROM TrybeSmith.Users WHERE id = ?';
  const [rows] = await connection.execute<ResultSetHeader>(query, [id]);
  return Object.values(rows)[0];
};

export {
  createUser,
  userLogin,
  getUser,
};