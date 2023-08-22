"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
const mongodb_1 = require("mongodb");
const fs_1 = require("fs");
const config_1 = __importDefault(require("../config"));
const write = () => __awaiter(void 0, void 0, void 0, function* () {
    const args = process.argv;
    if (args.length !== 4) {
        // eslint-disable-next-line no-console
        console.log(`Usage: ${args[0]} ${args[1]} ${args[2]} ${args[3]}`);
        return;
    }
    const inputFile = args[2];
    const databaseName = args[3];
    const inputExists = yield (0, fs_1.existsSync)(inputFile);
    if (!inputExists || databaseName.length <= 0) {
        // eslint-disable-next-line no-console
        console.log('Please use valid input file paths and database name');
        return;
    }
    const inputString = yield (0, fs_1.readFileSync)(args[2], 'utf-8');
    const input = yield JSON.parse(inputString);
    if (config_1.default.MONGODB_URI) {
        const client = new mongodb_1.MongoClient(config_1.default.MONGODB_URI, {});
        yield client.connect();
        const db = client.db('citybike');
        const journeysCollection = db.collection(databaseName);
        yield journeysCollection.insertMany(input);
        client.close();
        // eslint-disable-next-line no-console
        console.log('data import completed');
    }
});
exports.write = write;
(0, exports.write)();
