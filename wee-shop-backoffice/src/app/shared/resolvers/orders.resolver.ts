import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ProductSearchModel } from "../models/product/products-search-model.model";
import { ProductsService } from "../services/api-consumer/products.service";

@Injectable({ providedIn: 'root' })
export class OrdersResolver implements Resolve<any> {

  constructor(private _productService: ProductsService) {}

  resolve(): Observable<any> | Promise<any> | any {
    const searchModel: ProductSearchModel = new ProductSearchModel()
    return this._productService.getWithFilter(searchModel);
  }
}
