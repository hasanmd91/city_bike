export type JourneyType = {
  departure: string;
  return: string;
  departureStationId: string;
  departureStationName: string;
  returnStationId: string;
  returnStationName: string;
  coveredDistance: number;
  duration: number;
};

export type BikeStationType = {
  FID: number;
  ID: number;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: number;
  x: string;
  y: string;
};

export enum DatabaseType {
  Journey = 'Journey',
  Station = 'Station',
}
