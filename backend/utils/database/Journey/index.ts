import Journey from '../../../models/journey';
import { JourneyType } from '../../Types';

type createJourneyDatabaseType = (input: JourneyType[]) => void;

export const createJourneyDatabase: createJourneyDatabaseType = async (
  input
) => {
  try {
    await Journey.deleteMany();
    await Journey.insertMany(input, { limit: undefined });
  } catch (error) {
    console.error('Error inserting journey documents:', error);
  } finally {
    process.exit(0);
  }
};
