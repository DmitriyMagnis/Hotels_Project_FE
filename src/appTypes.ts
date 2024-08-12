export interface IHotels {
  id: string;
  name: string;
  cityId: string;
  adults: number;
  children: number;
  checkInTime: Date;
  checkOutTime: Date;
  image: string;
  description: string;
  rooms: number;
}

export interface ResponseHotels {
  _id: string;
  name: string;
  cityId: string;
  adults: number;
  children: number;
  checkInTime: Date;
  checkOutTime: Date;
  imageId: string;
  description: string;
  rooms: number;
}

export interface ICities {
  name: string;
  id: string;
}

export interface ResponseCities {
  name: string;
  _id: string;
}

export interface IFilters {
  destination: string;
  checkIn: Date | string;
  checkOut: Date | string;
  adults: string;
  children: string;
  rooms: string;
}

export type STATUSES = 'idle' | 'loading' | 'failed';
