import { OrderProduct } from "./order-product.model";

export class Order{
  key: string;
  total: number;
  products: Array<OrderProduct>;

  constructor(key: string, total: number, products: Array<OrderProduct>){
    this.key = key;
    this.total = total;
    this.products = products;
  }
}
