"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCsvToJson = void 0;
const fs = require('fs');
const csv = require('csv-parser');
const convertCsvToJson = (file, callBack) => {
    const data = [];
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
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
exports.convertCsvToJson = convertCsvToJson;
