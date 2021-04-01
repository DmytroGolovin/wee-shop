import { ProductModel } from "../product/product-model.model";
import { Product } from "../product/product.model";

export class OrderProduct {
  productKey: string;
  productModelKey: string;
  price: number;
  size?: string;

  constructor(productKey: string, productModelKey: string, price: number){
    this.productKey = productKey;
    this.productModelKey = productModelKey;
    this.price = price;
  }
}
