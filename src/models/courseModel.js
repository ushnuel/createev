import DB from '../DB';
import { ErrorHandler } from '../helpers';

export default class Course {
  static async create({ price, title, days, capacity, level, description }) {
    const query = `INSERT INTO courses (
      title, 
      price,
      days,
      capacity,
      level,
      description
    )
    VALUES($1,$2,$3,$4,$5,$6)
    RETURNING *
    `;

    const params = [title, price, days, capacity, level, description];
    const course = await DB.query(query, params).catch((error) => {
      throw new ErrorHandler(error.message, 400);
    });
    return course;
  }

  static async get(id) {
    const query = `SELECT * FROM courses
    WHERE 
    id = $1`;
    const param = [id];
    const course = await DB.query(query, param).catch((err) => {
      throw new ErrorHandler(err.message, 400);
    });
    return course;
  }

  static async getAll() {
    const query = `SELECT * from courses`;
    const courses = await DB.query(query, '', true).catch((err) => {
      throw new ErrorHandler(err.message, 400);
    });
    return courses;
  }
}
