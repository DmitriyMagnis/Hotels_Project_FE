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

export interface ICities {
  name: string;
  id: string;
}

export type STATUSES = 'idle' | 'loading' | 'failed';
