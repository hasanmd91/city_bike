const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.convertCsvToJson = void 0;
const fs_1 = __importDefault(require('fs'));
const csv_parser_1 = __importDefault(require('csv-parser'));

const convertCsvToJson = (file, callBack) => {
  const data = [];
  try {
    fs_1.default.createReadStream(file)
      .pipe((0, csv_parser_1.default)())
      .on('data', (row) => {
        const FID = parseInt(row.FID, 10);
        const ID = parseInt(row.ID, 10);
        const Kapasiteet = parseInt(row.Kapasiteet, 10);
        const station = {
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
        console.log('Data import completed.');
        callBack(data);
      });
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
exports.convertCsvToJson = convertCsvToJson;
