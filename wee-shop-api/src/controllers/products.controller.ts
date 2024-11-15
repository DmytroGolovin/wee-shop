import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import db from '../shared/database/db';
import products from '../shared/mocks/products-mocks.mock';
import mapper from '../shared/helpers/mappers';
import { PaginatedResponse } from '../shared/models/paginated-response.model';
import { Product } from '../shared/models/product.model';
import { ProductSearchModel } from '../shared/search-models/product-search-model.model';
import { ProductModel } from '../shared/models/product-model.model';

const NAMESPACE = 'Product Controller';

const sampleHealthCheck = (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Sample health check route called.');

    return res.status(200).json({
        message: 'Pong'
    });
};

const addProductsMock = (req: Request, res: Response) => {
  logging.info(NAMESPACE, 'Inserting documents.');

  products.forEach(product => {
    //Insert products with unique Id
    const productsRef = db.ref('products');
    const firebaseProduct = mapper.mapProductForFirebase(product);
    const newProduct = productsRef.push(firebaseProduct);
    var productId = newProduct.key;

    product.models.forEach(model => {
      const productModelRef = db.ref(`productModels/${productId}`);
      productModelRef.push(model)
    });
  });

  return res.status(200).json({
      message: 'Done!'
  });
};


const getWithFilter = async (req: Request, res: Response) => {
    //Gets query string, parses it and convertso to an object
    const queryString = JSON.stringify(req.query);
    const searchModel: ProductSearchModel = JSON.parse(queryString) as ProductSearchModel;

    var filteredProducts: Array<Product> = [];

    const productsRef = db.ref('products');
    await productsRef.once("value").then(data => {
      if(!data.exists()){
        console.log('No data!');
        return;
      }

      //Returns object with projects
      const value = data.val();
      Object.keys(value).forEach(val => {
        var retrivedProduct: Product = value[val];
        retrivedProduct.key = val;
        filteredProducts.push(value[val]);
      });
    })
    .catch(err => {
      console.log("Getting projects failed:", err.message);
    });
  
    var response: PaginatedResponse<Product> = new PaginatedResponse<Product>();
    response.totalItems = filteredProducts.length;
    
    const fromPosition: number = (searchModel.pageNumber - 1) * searchModel.pageSize;
    const toPosition: number = searchModel.pageNumber * searchModel.pageSize;
    response.items = filteredProducts.slice(fromPosition, toPosition);
    
    return res.status(200).json(response);
};

const getProductByKey = async (req: Request, res: Response) => {
  var product: Product = new Product();
  const productKey = req.params.productKey;

  const productRef = db.ref('products');
  await productRef.child(productKey).once("value").then(async data => {
    if(!data.exists()){
      console.log('No data!');
      return res.status(200).json({});
    }
    
    product = data.val() as Product;   
    product.key = productKey;   
    product.models = await getProductModels(productKey);
  }).catch(err => {
    console.log("Getting projects failed:", err.message);
  });   
    
  return res.status(200).json(product);
};

const getProductModels = async function(productKey: string){
  var models: Array<ProductModel> = [];

  const productModelRef = db.ref('productModels');
  await productModelRef.child(productKey).once("value").then(data => {
      if(!data.exists()){
        console.log('No data!');
        return;
      }

      const value = data.val();

      Object.keys(value).forEach(val => {
        const productModel: ProductModel = value[val];
        productModel.key = val;
        models.push(productModel);
      });
    })
    .catch(err => {
      console.log("Getting projects failed:", err.message);
  });

  return models;
}

export default {
    sampleHealthCheck,
    getWithFilter,
    addProductsMock,
    getProductByKey
};