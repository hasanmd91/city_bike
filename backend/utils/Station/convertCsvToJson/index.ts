import fs from 'fs';
import csv from 'csv-parser';
import { BikeStationType } from '../../Types';

type ConvertCsvToJsonType = (
  file: string,
  callBack: (data: BikeStationType[]) => void
) => void;

export const convertCsvToJson: ConvertCsvToJsonType = (file, callBack) => {
  const data: BikeStationType[] = [];

  try {
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (row) => {
        const FID = parseInt(row.FID, 10);
        const ID = parseInt(row.ID, 10);
        const Kapasiteet = parseInt(row.Kapasiteet, 10);

        const station: BikeStationType = {
          FID,
          ID,
          Nimi: row.Nimi,
          Namn: row.Namn,
          Name: row.Name,
          Osoite: row.Osoite,
          Adress: row.Adress,
          Kaupunki: row.Kaupunki,
          Stad: row.Stad,
          Operaattor: row.Operaattor,
          Kapasiteet,
          x: row.x,
          y: row.y,
        };

        data.push(station);
      })
      .on('end', () => {
        // eslint-disable-next-line no-console
        console.log('Data import completed.');
        callBack(data);
      });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred:', error);
  }
};
