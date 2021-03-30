import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../../models/paginated-response.model';
import { Product } from '../../models/product/product.model';
import { ProductSearchModel } from '../../models/product/products-search-model.model';
import { BaseService } from '../base.service';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _baseService: BaseService,
    private constants: Constants) { }

  public getProducts(): Observable<Array<Product>> {
    return this._baseService.get<Array<Product>>(this.constants.api.products.root);
  }

  public getWithFilter(searchModel: ProductSearchModel): Observable<PaginatedResponse<Product>> {
    return this._baseService.get<PaginatedResponse<Product>>(this.constants.api.products.getWithFilters, searchModel);
  }
}
