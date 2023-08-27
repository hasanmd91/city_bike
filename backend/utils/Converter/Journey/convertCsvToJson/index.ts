import fs from 'fs';
import csv from 'csv-parser';
import { JourneyType } from '../../../Types';

type ConvertCsvToJsonType = (
  file: string,
  callBack: (data: JourneyType[]) => void
) => void;

export const convertCsvToJson: ConvertCsvToJsonType = (file, callBack) => {
  const data: JourneyType[] = [];

  try {
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (row) => {
        const departureTime = row.Departure;
        const returnTime = row.Return;
        const departureStationId = row['Departure station id'];
        const departureStationName = row['Departure station name'];
        const returnStationId = row['Return station id'];
        const returnStationName = row['Return station name'];
        const coveredDistance = parseInt(row['Covered distance (m)'], 10);
        const duration = parseInt(row['Duration (sec.)'], 10);

        if (duration >= 10 && coveredDistance >= 10) {
          const journey: JourneyType = {
            departure: departureTime,
            return: returnTime,
            departureStationId,
            departureStationName,
            returnStationId,
            returnStationName,
            coveredDistance,
            duration,
          };

          data.push(journey);
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
