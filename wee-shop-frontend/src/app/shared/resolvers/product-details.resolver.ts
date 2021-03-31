import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ProductsService } from "../services/api-consumer/products.service";

@Injectable({ providedIn: 'root' })
export class ProductDetailsResolver implements Resolve<any> {

  constructor(private _productService: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> | Promise<any> | any {
    const key = route.paramMap.get('key') as string;
    return this._productService.getByKey(key);
  }
}
