import Station from '../../../models/station';
import { BikeStationType } from '../../Types';

type CreateStationDatabasetype = (input: BikeStationType[]) => void;

export const createStationDatabase: CreateStationDatabasetype = async (
  input
) => {
  try {
    await Station.deleteMany();
    await Station.insertMany(input, { limit: undefined });
    console.info('Data import completed');
  } catch (error) {
    console.error('Error inserting station documents:', error);
  } finally {
    process.exit(0);
  }
};
