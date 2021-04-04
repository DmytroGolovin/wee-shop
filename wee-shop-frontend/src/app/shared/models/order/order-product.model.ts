export class OrderProduct {
  //Product Info
  productKey: string;
  productName: string;
  price: number;
  productType?: string;

  //Product Model Info
  productModelKey: string;
  productModelImage: string;
  size?: string;
  color: string;

  //General Info
  quantity: number = 1;

  constructor(productKey: string, productName: string, price: number, productModelKey: string, productModelImage: string, color: string){
    this.productKey = productKey;
    this.productName = productName;
    this.price = price;

    this.productModelKey = productModelKey;
    this.productModelImage = productModelImage;
    this.color = color;
  }
}
