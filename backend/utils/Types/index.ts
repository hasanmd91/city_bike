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

export enum HttpCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
