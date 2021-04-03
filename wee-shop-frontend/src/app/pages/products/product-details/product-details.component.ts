import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/shared/enums/product-type.enum';
import { OrderProduct } from 'src/app/shared/models/order/order-product.model';
import { ProductModel } from 'src/app/shared/models/product/product-model.model';
import { Product } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: Product;
  public size: any;

  public orderProduct!: OrderProduct;
  public selectedProductModel!: ProductModel;

  public selectedImage!: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.product = data.product;
      this.orderProduct = new OrderProduct(this.product.key, this.product.models[0].key, this.product.price);
      this.selectedProductModel = this.product.models[0];
      this.selectedImage = this.product.models[0].mainImage;
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

  public addToCart(){
    console.log(this.orderProduct);
  }

  public productModelChange(productModel: ProductModel){
    this.orderProduct.productModelKey = productModel.key;
    this.selectedProductModel = productModel;
    this.selectedImage = productModel.mainImage;
  }

  public isImageSelected(image: string){
    return this.selectedImage == image;
  }

  public selectImage(image: string){
    this.selectedImage = image;
  }

}
