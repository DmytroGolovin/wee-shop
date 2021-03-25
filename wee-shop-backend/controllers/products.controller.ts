import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { getQuery } from 'https://deno.land/x/oak/helpers.ts'
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { ProductType } from "../shared/enums/product-type.enum.ts";
import { PaginatedResponse } from "../shared/models/paginated-response.model.ts";
import { Product } from "../shared/models/product.model.ts"
import { ProductSearchModel } from "../shared/search-models/product-search-model.model.ts";

const products: Array<Product> = [
  {
    id: "1",
    name: "Hundred Mil Club Hoodie",
    price: 60.49,
    image: "https://img.represent.com/uploads/f1f7a1fe327b194e1dce29b4ce56463d.jpg?&w=750",
    type: ProductType.Hoodie
  },
  {
    id: "2",
    name: "Hundred Mil Club T-Shirt",
    price: 36.29,
    image: "https://img.represent.com/uploads/10d39cb0f909e2e1e4ecdde6e8e53e11.jpg?&w=750",
    type: ProductType.Shirt
  },
  {
    id: "3",
    name: "Hundred Mil Club Sweat",
    price: 48.39,
    image: "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750",
    type: ProductType.Hoodie
  },
  {
    id: "4",
    name: "Waves Hoodie",
    price: 60.49,
    image: "https://img.represent.com/uploads/242d3d7dd631b50eeea1a64625360952.jpg?&w=750",
    type: ProductType.Hoodie
  },
  {
    id: "5",
    name: "Hundred Mil Club Hat",
    price: 36.29,
    image: "https://img.represent.com/uploads/9532038d1edd2ec1262c68e79ce9fcbb.jpg?w=420",
    type: ProductType.Hat
  },
  {
    id: "6",
    name: "Waves // PewDiePie",
    price: 30.63,
    image: "https://img.represent.com/uploads/ded272656d9c99339cf08e4c6a6d9ef2.jpg?&w=750",
    type: ProductType.Shirt
  },
  {
    id: "7",
    name: "Angry Tambourine // PewDiePie",
    price: 30.63,
    image: "https://img.represent.com/uploads/78dde314642b5e22332fbc7d8b967bbd.jpg?&w=750",
    type: ProductType.Hat
  },
  {
    id: "8",
    name: "Happy Tambourine // PewDiePie",
    price: 30.63,
    image: "https://img.represent.com/uploads/f8e1c8d056cdb7977fd64f7f719f4942.jpg?&w=750",
    type: ProductType.Hat
  },
  {
    id: "9",
    name: "Fully Stacked Diamonds // PewDiePie",
    price: 40.84,
    image: "https://img.represent.com/uploads/a103e5926c21eb8656f392d7e6d247b9.jpg?&w=750",
    type: ProductType.Hoodie
  },
  {
    id: "10",
    name: "Fully Stacked Diamonds // PewDiePie",
    price: 51.05,
    image: "https://img.represent.com/uploads/596a62b7321adf3ec33e01149c8b227f.jpg?&w=750",
    type: ProductType.Hoodie
  }
];

const getProducts = ({ response }: { response: any}) => {
  response.body = {
    success: true,
    data: products,
  };
};

const getProductsWithFilter = (ctx: RouterContext) => {
  //Gets query string, parses it and convertso to an object
  const queryMap = getQuery(ctx, { mergeParams: true });
  const queryString = JSON.stringify(queryMap);
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
  
  ctx.response.body = response
};

const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const selectedProduct: Product | undefined = products.find((product) =>
    product.id === params.id
  );

  if (selectedProduct) {
    response.status = 200;
    response.body = {
      success: true,
      data: selectedProduct,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Product Not Found",
    };
  }
};

const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const { value : productBody } = await request.body();
    const product: Product = productBody;
    product.id = v4.generate();
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const filteredProducts: Array<Product> = products.filter(
    (product: Product) => (product.id !== params.id),
  );
  if (filteredProducts.length === products.length) {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Not found",
    };
  } else {
    products.splice(0, products.length);
    products.push(...filteredProducts);
    response.status = 200;
    response.body = {
      success: true,
      msg: `Product with id ${params.id} has been deleted`,
    };
  }
};

const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const requestedProduct: Product | undefined = products.find(
    (dinosaur: Product) => dinosaur.id === params.id,
  );
  if (requestedProduct) {
    const { value : updatedProductBody } = await request.body();
    const updatedProducts: Array<Product> = products.map(
      (product: Product) => {
        if (product.id === params.id) {
          return {
            ...product,
            ...updatedProductBody,
          };
        } else {
          return product;
        }
      },
    );

    products.splice(0, products.length);
    products.push(...updatedProducts);
    response.status = 200;
    response.body = {
      success: true,
      msg: `Product id ${params.id} updated`,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: `Not Found`,
    };
  }
};

export {
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
  addProduct,
  getProductsWithFilter
};