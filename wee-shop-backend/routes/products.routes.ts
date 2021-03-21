import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from "../controllers/products.controller.ts"

const productsRouter = new Router();

productsRouter
  /**
   * @description Get all products
   */
  .get("/api/products", getProducts)
  /**
   * @description Get product by id
   */
  .get("/api/products/:id", getProduct)
  /**
   * @description Add new product 
   */
  .post("/api/products", addProduct)
  /**
   * @description Update product by id
   */
  .put("/api/products/:id", updateProduct)
  /**
   * @description Delete product by id
   */
  .delete("/api/products/:id", deleteProduct);

export default productsRouter;