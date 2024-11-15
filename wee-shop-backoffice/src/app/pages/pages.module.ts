import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [HomeComponent, LoginComponent, ProductsComponent, ProductDetailsComponent, OrdersComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [
    AuthGuard
  ]
})
export class PagesModule { }
