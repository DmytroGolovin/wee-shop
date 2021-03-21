import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
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
}
