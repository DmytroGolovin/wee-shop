import { Product } from "../models/product.model";

const mapProductForFirebase = function(product: Product) : any {
    const firebaseProduct = {
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type
    }
    return firebaseProduct;
}

export default {
    mapProductForFirebase
}