import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Array<Product> = [];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this._route.data.subscribe(data => {
      this.products = data.products.data;
    });
  }



}
