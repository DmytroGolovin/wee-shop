import { ProductType } from "../enums/product-type.enum";

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    type: ProductType;
}