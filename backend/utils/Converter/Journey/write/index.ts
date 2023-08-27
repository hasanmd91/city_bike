import { existsSync, writeFileSync } from 'fs';
import { convertCsvToJson } from '../convertCsvToJson/index';

type Write = () => void;

export const write: Write = async () => {
  const args = process.argv;

  if (args.length !== 4) {
    console.info(`Usage: ${args[0]} ${args[1]} input output`);

    return;
  }

  const inputFile = args[2];
  const outputFile = args[3];

  const inputExists = existsSync(inputFile);
  const outputExists = existsSync(outputFile);

  if (!inputExists || !outputExists) {
    console.info('Please use valid input and output file paths');

    return;
  }

  convertCsvToJson(inputFile, async (output) => {
    const outputString = JSON.stringify(output);

    writeFileSync(args[3], outputString, 'utf8');
  });
};

write();
