import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, AboutComponent, ProductDetailsComponent, CartComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    NgbModule
  ]
})
export class PagesModule { }
