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
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
const fs_1 = require("fs");
const index_1 = require("../convertCsvToJson/index");
const write = () => __awaiter(void 0, void 0, void 0, function* () {
    const args = process.argv;
    if (args.length !== 4) {
        console.log(`Usage: ${args[0]} ${args[1]} input output`);
        return;
    }
    const inputFile = args[2];
    const outputFile = args[3];
    const inputExists = yield (0, fs_1.existsSync)(inputFile);
    const outputExists = yield (0, fs_1.existsSync)(outputFile);
    if (!inputExists || !outputExists) {
        console.log(`Please use valid input and output file paths`);
        return;
    }
    (0, index_1.convertCsvToJson)(inputFile, (output) => __awaiter(void 0, void 0, void 0, function* () {
        const outputString = yield JSON.stringify(output);
        yield (0, fs_1.writeFileSync)(args[3], outputString, 'utf8');
    }));
});
exports.write = write;
(0, exports.write)();
