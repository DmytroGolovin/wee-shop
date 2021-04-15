import { PaginatedSearchModel } from "../paginated-search-model.model";

export class OrdersSearchModel extends PaginatedSearchModel{
  dateFrom?: Date;
  dateTo?: Date;
}
