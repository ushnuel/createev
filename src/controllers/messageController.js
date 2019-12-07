import nodemailer from 'nodemailer';
import config from '../config';
import { ErrorHandler } from '../helpers';

export default class MessageController {
  static async send(req, res, next) {
    try {
      const body = `
        <p>Message from ${req.body.name}</p>
        <p>My email address is ${req.body.email}</p>
        <P>My company is ${req.body.company}</p>
        <p>I heard about you on ${req.body.selectedOption}</p>
        <h3>My quotation</h3>
        <p>${req.body.message}</p>
    `;
      const mailOptions = {
        from: 'ezeemmanuel2010@gmail.com',
        to: 'blesseddomcollins@gmail.com',
        subject: '![Quotation] from ' + req.body.name,
        html: body,
      };

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        secure: true,
        auth: config.auth,
      });

      await transporter
        .sendMail(mailOptions)
        .then(() => {
          res
            .status(200)
            .json({ message: 'Thank you for contacting us', status: 200 });
        })
        .catch(() => {
          throw new ErrorHandler('Connection Lost. Please try again', 400);
        });
    } catch (error) {
      next(error);
    }
  }
}
