import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import products from '../shared/mocks/products-mocks.mock';
import { PaginatedResponse } from '../shared/models/paginated-response.model';
import { Product } from '../shared/models/product.model';
import { ProductSearchModel } from '../shared/search-models/product-search-model.model';

const NAMESPACE = 'Product Controller';

const sampleHealthCheck = (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Sample health check route called.');

    return res.status(200).json({
        message: 'Pong'
    });
};

const getWithFilter = (req: Request, res: Response) => {
    //Gets query string, parses it and convertso to an object
    const queryString = JSON.stringify(req.query);
    const searchModel: ProductSearchModel = JSON.parse(queryString) as ProductSearchModel;
  
    var filteredProducts: Array<Product> = new Array<Product>();
  
    if(searchModel.type){
      filteredProducts = products.filter(
        (product: Product) => (product.type == searchModel.type),
      );
    }else{
      filteredProducts = [...products];
    }
  
    var response: PaginatedResponse<Product> = new PaginatedResponse<Product>();
    response.totalItems = filteredProducts.length;
    const fromPosition: number = (searchModel.pageNumber - 1) * searchModel.pageSize;
    const toPosition: number = searchModel.pageNumber * searchModel.pageSize;
    response.items = filteredProducts.slice(fromPosition, toPosition);
    
    return res.status(200).json(response);
  };

export default {
    sampleHealthCheck,
    getWithFilter
};