import { ProductType } from "../enums/product-type.enum";
import { ProductModel } from "./product-model.model";

export class Product {
    // id: number;
    key?: string;
    name!: string;
    price!: number;
    image!: string;
    type!: ProductType;
    models!: ProductModel[];
}