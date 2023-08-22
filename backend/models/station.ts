import mongoose from '../mongo';

const stationSchema = new mongoose.Schema({
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

const Station = mongoose.model('Station', stationSchema);

export default Station;
