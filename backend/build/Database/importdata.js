"use strict";
// const fs = require('fs');
// const csv = require('csv-parser');
// const { MongoClient } = require('mongodb');
// interface JourneyData {
//   Departure: string;
//   Return: string;
//   'Departure station id': string;
//   'Departure station name': string;
//   'Return station id': string;
//   'Return station name': string;
//   'Covered distance (m)': string;
//   'Duration (sec.)': string;
// }
// async function importData() {
//   const client = new MongoClient(
//     'mongodb+srv://hasanmd1991:x5cZFj3mqSa7uPIQ@clustersolita.2ztdulk.mongodb.net/',
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
//   await client.connect();
//   const db = client.db('CityBike');
//   const journeysCollection = db.collection('journeys');
//   try {
//     await journeysCollection.deleteMany({});
//     fs.createReadStream('2021-05.csv')
//       .pipe(csv({ batchSize: 100 }))
//       .on('data', async (row: JourneyData) => {
//         const departureTime = row.Departure;
//         const returnTime = row.Return;
//         const departureStationId = parseInt(row['Departure station id'], 10);
//         const departureStationName = row['Departure station name'];
//         const returnStationId = parseInt(row['Return station id'], 10);
//         const returnStationName = row['Return station name'];
//         const coveredDistance = parseInt(row['Covered distance (m)'], 10);
//         const duration = parseInt(row['Duration (sec.)'], 10);
//         if (duration >= 10 && coveredDistance >= 10) {
//           const journey = {
//             Departure: departureTime,
//             Return: returnTime,
//             'Departure station id': departureStationId,
//             'Departure station name': departureStationName,
//             'Return station id': returnStationId,
//             'Return station name': returnStationName,
//             'Covered distance': coveredDistance,
//             Duration: duration,
//           };
//           await journeysCollection.insertOne(journey);
//         }
//       })
//       .on('end', async () => {
//         console.log('Data import completed.');
//         client.close();
//       });
//   } catch (error) {
//     console.error('An error occurred:', error);
//     client.close();
//   }
// }
// importData().catch((err) => console.log(err));
