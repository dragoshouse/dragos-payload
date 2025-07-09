import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'development',
    express: app,
  });

  app.listen(3000, () => {
    payload.logger.info('Server started at http://localhost:3000');
  });
};

start();
