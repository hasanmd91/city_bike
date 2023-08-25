import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandeler, unknownEndpoint } from './middleware';

import('express-async-errors');

const app = express();
app.use(cors());
app.use(express.static('build'));
app.use(express.json());

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
);

app.use(unknownEndpoint);
app.use(errorHandeler);

export default app;
