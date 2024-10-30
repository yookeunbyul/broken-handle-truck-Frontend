interface IStore {
  _id: string;
  name: string;
  ownerId: string;
  coordinates: number[];
  isOpen: boolean;
  category: string;
  paymentMethod: string[];
  createdAt: string;
  updatedAt: string;
}

export type { IStore };
