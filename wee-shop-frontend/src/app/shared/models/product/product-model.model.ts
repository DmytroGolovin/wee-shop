import { ProductSize } from "./product-size.model";

export interface ProductModel {
  color: string;
  mainImage: string;
  images: string[];
  sizes: ProductSize[];
}
