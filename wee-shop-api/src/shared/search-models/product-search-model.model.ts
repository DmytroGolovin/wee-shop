import { ProductType } from "../enums/product-type.enum";
import { PaginatedSearchModel } from "./paginated-search-model.model";

export class ProductSearchModel extends PaginatedSearchModel{
    type!: ProductType;
  }
  