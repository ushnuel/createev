import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
  connectionString: config.DB,
});

export default class DB {
  static async query(querystreams, params, isArray = false) {
    const oneLineQuery = DB.removeNewLine(querystreams);
    const stream = await pool.query(oneLineQuery, params);
    return isArray ? stream.rows : stream.rows[0];
  }

  static removeNewLine(string) {
    return string.replace(/\n/g, '');
  }
}
