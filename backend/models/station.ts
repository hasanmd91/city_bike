import mongoose from '../mongo';
import { BikeStationType } from '../utils/Types';

const stationSchema = new mongoose.Schema<BikeStationType>({
  FID: { type: Number },
  ID: { type: Number },
  Nimi: { type: String },
  Namn: { type: String },
  Name: { type: String },
  Osoite: { type: String },
  Adress: { type: String },
  Kaupunki: { type: String },
  Stad: { type: String },
  Operaattor: { type: String },
  Kapasiteet: { type: Number },
  x: { type: String },
  y: { type: String },
});

stationSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Station = mongoose.model('Station', stationSchema);

export default Station;
