import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InUser, InCreateUser } from '../interfaces/User';

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
https://github.com/tryber/sd-014-b-project-trybesmith/pull/11/files
https://github.com/tryber/sd-014-b-project-trybesmith/pull/30/files
*/

export default createUser;