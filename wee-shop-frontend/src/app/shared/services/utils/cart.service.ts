import { Injectable } from '@angular/core';
import { OrderProduct } from 'src/app/shared/models/order/order-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public addProduct(product: OrderProduct){
    const cartJson = localStorage.getItem('cart');
    let cart;

    if(cartJson){
      cart = JSON.parse(cartJson) as Array<OrderProduct>;
      const index = cart.findIndex(x => x.productModelKey == product.productModelKey);

      if(index == -1){
        cart.push(product);
      }
    }else{
      cart = [product];
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  public removeProduct(product: OrderProduct){
    const cartJson = localStorage.getItem('cart');

    if(cartJson){
      let cart = JSON.parse(cartJson) as Array<OrderProduct>;
      const index = cart.findIndex(x => x.productModelKey == product.productModelKey);

      if(index != -1){
        cart.splice(index, 1);
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  }

  public getCartProducts() : Array<OrderProduct>{
    const cartJson = localStorage.getItem('cart');

    if(cartJson){
      return JSON.parse(cartJson) as Array<OrderProduct>;
    }

    return [];
  }
}
