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
  public totalItems: number = 0;
  public page: number = 1;
  public pageSize: number = 10;
  public searchModel: ProductSearchModel = new ProductSearchModel();

  constructor(private _route: ActivatedRoute,
              private _productService: ProductsService) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.products = data.products.items;
      this.totalItems = data.products.totalItems;
      console.log(this.products);
    });

    this.searchModel.pageNumber = 1;
    this.searchModel.pageSize = 10;
  }

  public search(){
    this._productService.getWithFilter(this.searchModel).subscribe(res => {
      this.products = res.items;
      this.totalItems = res.totalItems;
    });
  }

  public getTypeNameByType(type: ProductType){
    switch(type){
      case ProductType.Hat:
        return "Hat";
      case ProductType.Hoodie:
        return "Hoodie";
      case ProductType.Shirt:
        return "Shirt";
      default:
        return "Other";
    }
  }

}
