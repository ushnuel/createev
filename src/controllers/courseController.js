import CourseModel from '../models/courseModel';

export default class CourseControl {
  static async create(req, res, next) {
    console.log('REQ', req.body);
    try {
      const data = await CourseModel.create(req.body);
      res.status(201).json({ data, status: 201 });
    } catch (error) {
      next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const data = await CourseModel.get(req.params.id);
      res.status(200).json({ data, status: 200 });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const courses = await CourseModel.getAll();
      const data = [...courses];
      res.status(200).json({
        data,
        status: 200,
      });
    } catch (error) {
      next(error);
    }
  }
}
