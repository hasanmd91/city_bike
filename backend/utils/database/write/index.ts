import { existsSync, readFileSync } from 'fs';
import { createJourneyDatabase } from '../Journey';
import { createStationDatabase } from '../Station';

type Write = () => void;

export const write: Write = async () => {
  const args = process.argv;

  if (args.length !== 4) {
    console.error(`Usage: ${args[0]} ${args[1]} ${args[2]} ${args[3]}`);
    return;
  }

  const inputFile = args[2];
  const database = args[3];

  const inputExists = existsSync(inputFile);

  if (!inputExists || database.length <= 0) {
    console.error('Please use valid input file paths and database name');

    return;
  }
  const inputString = readFileSync(args[2], 'utf-8');
  const input = await JSON.parse(inputString);

  if (database === 'Journey') {
    console.log('createJourneyDatabase is callled');
    createJourneyDatabase(input);
  } else if (database === 'Station') {
    console.log('createStationDatabase is called');

    createStationDatabase(input);
  }
};

write();
