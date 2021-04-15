import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { ProductsComponent } from './products/products.component';
import { ProductsResolver } from '../shared/resolvers/products.resolver';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDetailsResolver } from '../shared/resolvers/product-details.resolver';
import { OrdersComponent } from './orders/orders.component';
import { OrdersResolver } from '../shared/resolvers/orders.resolver';
import { OrderDetailsResolver } from '../shared/resolvers/order-details.resolver';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    resolve: {
      products: ProductsResolver
    }
  },
  {
    path: 'product/:key',
    component: ProductDetailsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    resolve: {
      product: ProductDetailsResolver
    }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    resolve: {
      orders: OrdersResolver
    }
  },
  {
    path: 'order/:key',
    component: ProductDetailsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    resolve: {
      order: OrderDetailsResolver
    }
  },
  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
