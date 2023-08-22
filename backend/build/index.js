"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./utils/config"));
const app_1 = __importDefault(require("./app."));
app_1.default.listen(config_1.default.port, () => {
    console.log(`Server is listening on ${config_1.default.port}`);
});
