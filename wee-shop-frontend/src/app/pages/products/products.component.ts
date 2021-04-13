import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/shared/enums/product-type.enum';
import { Product } from 'src/app/shared/models/product/product.model';
import { ProductSearchModel } from 'src/app/shared/models/product/products-search-model.model';
import { ProductsService } from 'src/app/shared/services/api-consumer/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Array<Product> = [];
  public totalProducts: number = 0;
  public searchModel: ProductSearchModel = new ProductSearchModel();

  public ProductType = ProductType;

  constructor(private _route: ActivatedRoute,
              private _productService: ProductsService) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.products = data.products.items;
      this.totalProducts = data.products.totalItems;
    });
  }

  public searchByFilter(type?: ProductType){
    this.searchModel.type = type;
    this.searchModel.pageNumber = 1;
    this.products = [];
    this.totalProducts = 0;

    this.search();
  }

  public loadMore(){
    this.searchModel.pageNumber++;
    this.search();
  }

  private search(){
    this._productService.getWithFilter(this.searchModel).subscribe(res => {
      this.products = this.products.concat(res.items);
      this.totalProducts = res.totalItems;
    });
  }
}
