import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/api-consumer/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Array<Product> = [];

  public activeFilter = 1;

  constructor(private _route: ActivatedRoute,
              private _productService: ProductsService) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.products = data.products.data;
    });
  }

  public searchByFilter(filter: number){
    this.activeFilter = filter;
    this._productService.getProductsByFilter(filter).subscribe(res => {
      this.products = res.data;
    });
  }

}
