"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('express-async-errors');
const app = (0, express_1.default)();
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const middleware_1 = require("./middleware");
app.use((0, cors_1.default)());
app.use(express_1.default.static('build'));
app.use(express_1.default.json());
morgan_1.default.token('body', (req) => JSON.stringify(req.body));
app.use((0, morgan_1.default)(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));
if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controller/testing.js');
    app.use('/api/testing', testingRouter);
}
app.use(middleware_1.unknownEndpoint);
app.use(middleware_1.errorHandeler);
exports.default = app;
