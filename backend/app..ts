import express from 'express';
import('express-async-errors');
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import { errorHandeler, unknownEndpoint } from './middleware';

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
);

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controller/testing.js');
  app.use('/api/testing', testingRouter);
}

app.use(unknownEndpoint);
app.use(errorHandeler);

export default app;
