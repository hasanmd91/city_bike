"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = __importDefault(require("../mongo"));
const stationSchema = new mongo_1.default.Schema({
    FID: { type: Number },
    ID: { type: Number },
    Nimi: { type: Number },
    Namn: { type: Number },
    Name: { type: Number },
    Osoite: { type: Number },
    Adress: { type: Number },
    Kaupunki: { type: Number },
    Stad: { type: Number },
    Operaattor: { type: Number },
    Kapasiteet: { type: Number },
    x: { type: Number },
    y: { type: Number },
});
stationSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
const Station = mongo_1.default.model('Station', stationSchema);
exports.default = Station;
