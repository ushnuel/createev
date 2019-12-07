import 'dotenv/config';

const config = {};

switch (process.env.NODE_ENV) {
  case 'dev':
    config.PORT = process.env.DEV_PORT;
    config.DB = process.env.DB;
    break;

  case 'prod':
    config.PORT = process.env.PORT;
    config.DB = process.env.DATABASE_URL;
    break;

  default:
    config.PORT = process.env.PORT || 5000;
    config.DB = process.env.DB;
}
const auth = {
  user: 'ezeemmanuel2010@gmail.com',
  pass: process.env.password,
};

config.auth = auth;

export default config;
