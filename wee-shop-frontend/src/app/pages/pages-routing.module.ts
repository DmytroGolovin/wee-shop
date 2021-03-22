import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsResolver } from '../shared/resolvers/products.resolver';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      products: ProductsResolver
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: {
      products: ProductsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
