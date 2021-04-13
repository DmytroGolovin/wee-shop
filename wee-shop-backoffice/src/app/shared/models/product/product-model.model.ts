import { ProductSize } from "./product-size.model";

export interface ProductModel {
  key: string;
  color: string;
  colorHex: string;
  mainImage: string;
  images: string[];
  sizes: ProductSize[];
}
