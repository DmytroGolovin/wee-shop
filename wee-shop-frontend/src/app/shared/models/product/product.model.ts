import { ProductType } from "../../enums/product-type.enum";
import { ProductModel } from "./product-model.model";

export class Product{
  key: string;
  name: string;
  price: number;
  image: string;
  type: ProductType;
  models: ProductModel[] = [];

  constructor(key: string, name: string, image: string, price: number, type: ProductType){
    this.key = key;
    this.name = name;
    this.image = image;
    this.price = price;
    this.type = type;
  }
}
