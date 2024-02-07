export interface IVehicle {
  name: string;
  type: string;
  gasolineLiter: number;
  kindOfTransition: string;
  people: number;
  pricePerDay: number;
  id: string;
  img: string;
}

export interface IVehicleDetails extends IVehicle {
  description: string;
  images: { url: string }[];
}

export type TMeta = {
  total: number;
  last_page: number;
};
