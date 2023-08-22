import mongoose from 'mongoose';
import config from './utils/config';

mongoose.set('strictQuery', false);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    'connected to mongodb';
  })
  .catch((error) =>
    console.log(`error connecting to mongodb: ${error.message}`)
  );

export default mongoose;
