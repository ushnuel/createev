import DB from '../DB';
import { ErrorHandler } from '../helpers';

export default class RegisterModel {
  static async create({ name, email, phone, course_id }) {
    const query = `INSERT INTO registers(
      name,
      email,
      phone,
      course_id
    )
    VALUES($1,$2,$3,$4)
    RETURNING *`;
    const params = [name, email, phone, course_id];
    const register = await DB.query(query, params).catch((err) => {
      throw new ErrorHandler(err.message);
    });
    return register;
  }
}
