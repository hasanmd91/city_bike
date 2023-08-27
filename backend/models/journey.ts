import mongoose from '../mongo';
import { JourneyType } from '../utils/Types';

const journeySchema = new mongoose.Schema<JourneyType>({
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

const Journey = mongoose.model('Journey', journeySchema);

export default Journey;
