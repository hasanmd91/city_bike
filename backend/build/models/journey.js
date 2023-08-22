"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = __importDefault(require("../mongo"));
const journeySchema = new mongo_1.default.Schema({
    departure: {
        type: String,
        required: true,
    },
    return: {
        type: String,
        required: true,
    },
    departureStationId: {
        type: String,
        required: true,
    },
    departureStationName: {
        type: String,
        required: true,
    },
    returnStationId: {
        type: String,
        required: true,
    },
    returnStationName: {
        type: String,
        required: true,
    },
    coveredDistance: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
});
journeySchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
const Journey = mongo_1.default.model('Journey', journeySchema);
exports.default = Journey;
