import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PagesModule { }
