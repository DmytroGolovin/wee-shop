import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/shared/enums/product-type.enum';
import { Product } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: Product;
  public size: any;

  public selectedModel: any = {};

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.product = data.product;
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
        return "Outro";
    }
  }

}
