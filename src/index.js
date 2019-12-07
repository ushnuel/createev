import '@babel/polyfill';
import express, { urlencoded, json } from 'express';
import cors from 'cors';
import routes from './routes';
import config from './config';
import { FeedbackHandler } from './helpers';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1/', routes);

app.get('/', (req, res, next) => {
  res.status(200).json({
    Message: 'Welcome to CODEET official backend page',
  });
  next();
});
app.use(FeedbackHandler.error);

app.set('port', config.PORT);
app.listen(config.PORT, () => {
  console.log('App has started on', config.PORT);
});

export default app;
