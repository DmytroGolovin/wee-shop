import { ProductType } from "../enums/product-type.enum.ts";
import { PaginatedSearchModel } from "./paginated-search-model.model.ts";

export class ProductSearchModel extends PaginatedSearchModel{
  type!: ProductType;
}
