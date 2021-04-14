import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product?: Product;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.product = data.product;
      console.log(this.product);
    });
  }

}
