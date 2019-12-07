import RegisterModel from '../models/registerModel';

export default class RegisterController {
  static async register(req, res, next) {
    try {
      await RegisterModel.create(req.body);
      res.status(200).json({
        message: 'Course application successful',
        status: 200,
      });
    } catch (error) {
      next(error);
    }
  }
}
