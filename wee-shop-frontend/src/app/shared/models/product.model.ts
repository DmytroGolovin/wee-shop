import { ProductType } from "../enums/product-type.enum";

export interface Product{
  id: string;
  name: string;
  image: string;
  price: number;
  type: ProductType;
}
