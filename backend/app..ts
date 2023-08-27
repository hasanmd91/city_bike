import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';
import * as bodyParser from 'body-parser';
import { errorHandeler, unknownEndpoint } from './middleware';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));
app.use(express.json());
app.use(morgan('combined'));

app.use(unknownEndpoint);
app.use(errorHandeler);

export default app;
