"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./utils/config"));
mongoose_1.default.set('strictQuery', false);
mongoose_1.default
    .connect(config_1.default.MONGODB_URI)
    .then(() => {
    'connected to mongodb';
})
    .catch((error) => console.log(`error connecting to mongodb: ${error.message}`));
exports.default = mongoose_1.default;
