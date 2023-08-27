import fs from 'fs';
import csv from 'csv-parser';
import { BikeStationType } from '../../../Types';

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
        try {
          const FID = parseInt(row.FID, 10);
          const ID = parseInt(row.ID, 10);
          const Nimi = row.Nimi;
          const Namn = row.Namn;
          const Name = row.Name;
          const Osoite = row.Osoite;
          const Adress = row.Adress;
          const Kaupunki = row.Kaupunki;
          const Stad = row.Stad;
          const Operaattor = row.Operaattor;
          const Kapasiteet = parseInt(row.Kapasiteet, 10);
          const x = row.x;
          const y = row.y;

          const station: BikeStationType = {
            FID,
            ID,
            Nimi,
            Namn,
            Name,
            Osoite,
            Adress,
            Kaupunki,
            Stad,
            Operaattor,
            Kapasiteet,
            x,
            y,
          };

          data.push(station);
        } catch (error) {
          console.error('An error occured during parsing', error);
        }
      })
      .on('end', () => {
        console.info('Data import completed.');
        callBack(data);
      });
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
