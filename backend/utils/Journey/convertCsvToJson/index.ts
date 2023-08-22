const fs = require('fs');
const csv = require('csv-parser');

export type JourneyData = {
  departure: string;
  return: string;
  departureStationId: string;
  departureStationName: string;
  returnStationId: string;
  returnStationName: string;
  coveredDistance: number;
  duration: number;
};

type ConvertCsvToJsonType = (
  file: string,
  callBack: (data: JourneyData[]) => void
) => void;

export const convertCsvToJson: ConvertCsvToJsonType = (file, callBack) => {
  const data: JourneyData[] = [];

  try {
    fs.createReadStream(file)
      .pipe(csv({ batchSize: 100 }))
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
          const journey: JourneyData = {
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
        // eslint-disable-next-line no-console
        console.log('Data import completed.');
        callBack(data);
      });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred:', error);
  }
};
