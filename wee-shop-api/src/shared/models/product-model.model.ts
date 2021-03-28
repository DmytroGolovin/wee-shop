import { Image } from "./image.model";
import { ProductSize } from "./product-size";

export interface ProductModel {
    // id: number;
    // productId: number;
    color: string;
    mainImage: string;
    images: string[];
    sizes: ProductSize[];
}