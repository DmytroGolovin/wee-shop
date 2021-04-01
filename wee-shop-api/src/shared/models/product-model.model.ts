import { ProductSize } from "./product-size";

export interface ProductModel {
    // id: number;
    // productId: number;
    key?: string;
    color: string;
    colorHex: string;
    mainImage: string;
    images: string[];
    sizes: ProductSize[];
}