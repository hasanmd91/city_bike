import { MongoClient } from 'mongodb';
import { existsSync, readFileSync } from 'fs';
import config from '../config';

type Write = () => void;

export const write: Write = async () => {
  const args = process.argv;

  if (args.length !== 4) {
    // eslint-disable-next-line no-console
    console.log(`Usage: ${args[0]} ${args[1]} ${args[2]} ${args[3]}`);
    return;
  }

  const inputFile = args[2];
  const databaseName = args[3];

  const inputExists = await existsSync(inputFile);

  if (!inputExists || databaseName.length <= 0) {
    // eslint-disable-next-line no-console
    console.log('Please use valid input file paths and database name');

    return;
  }
  const inputString = await readFileSync(args[2], 'utf-8');
  const input = await JSON.parse(inputString);

  if (config.MONGODB_URI) {
    const client = new MongoClient(config.MONGODB_URI, {});

    await client.connect();
    const db = client.db('citybike');
    const journeysCollection = db.collection(databaseName);

    await journeysCollection.insertMany(input);
    client.close();
    // eslint-disable-next-line no-console
    console.log('data import completed');
  }
};

write();
