const fs = require('fs');
const csv = require('csv-parser');

export type JourneyData = {
  Departure: string;
  Return: string;
  'Departure station id': string;
  'Departure station name': string;
  'Return station id': string;
  'Return station name': string;
  'Covered distance': number;
  Duration: number;
};

type convertCsvToJsonType = (
  file: string,
  callBack: (data: JourneyData[]) => void
) => void;

export const convertCsvToJson: convertCsvToJsonType = (file, callBack) => {
  const data: JourneyData[] = [];

  try {
    fs.createReadStream(file)
      .pipe(csv({ batchSize: 100 }))
      .on('data', (row: JourneyData) => {
        const departureTime = row.Departure;
        const returnTime = row.Return;
        const departureStationId = row['Departure station id'];
        const departureStationName = row['Departure station name'];
        const returnStationId = row['Return station id'];
        const returnStationName = row['Return station name'];
        const coveredDistance = parseInt(row['Covered distance (m)'], 10);
        const duration = parseInt(row['Duration (sec.)'], 10);

        if (duration >= 10 && coveredDistance >= 10) {
          const journey = {
            Departure: departureTime,
            Return: returnTime,
            'Departure station id': departureStationId,
            'Departure station name': departureStationName,
            'Return station id': returnStationId,
            'Return station name': returnStationName,
            'Covered distance': coveredDistance,
            Duration: duration,
          };

          data.push(journey);
        }
      })
      .on('end', () => {
        console.log('Data import completed.');
        callBack(data);
      });
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
