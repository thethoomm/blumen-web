export type Plant = {
  id?: number;
  title: string;
  subtitle: string;
  tags: string;
  price: number;
  isSale: boolean;
  discountPercent: number;
  characteristics: string;
  description: string;
  imageUrl: string;
  plantTypeId: number;
  createdAt?: Date;
  updatedAt?: Date;
};
