import { Component, OnInit } from '@angular/core';
import { OrderProduct } from 'src/app/shared/models/order/order-product.model';
import { CartService } from 'src/app/shared/services/utils/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Array<OrderProduct> = [];
  public shipping: number = 13.49;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.products = this._cartService.getCartProducts();
    console.log(this.products);
  }

  public getOrderSubTotal(){
    let total = 0;
    this.products.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  }

  public addQuantity(product: OrderProduct){
    product.quantity++;
  }

  public removeQuantity(product: OrderProduct){
    if(product.quantity > 0){
      product.quantity--;
    }
  }

  public getOrderTotal(){
    const subTotal = this.getOrderSubTotal();
    return subTotal + subTotal * 0.23 + this.shipping;
  }

  public removeProduct(product: OrderProduct){
    this._cartService.removeProduct(product);
    this.products = this._cartService.getCartProducts();
    console.log(this.products);
  }

  public checkOut(){

  }

}
