"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
exports.default = { port, MONGODB_URI };
