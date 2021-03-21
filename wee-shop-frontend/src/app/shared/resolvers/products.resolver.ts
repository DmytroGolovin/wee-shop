import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductsService } from "../services/api-consumer/products.service";

@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<any> {

  constructor(private _productService: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this._productService.getProducts();
  }
}
