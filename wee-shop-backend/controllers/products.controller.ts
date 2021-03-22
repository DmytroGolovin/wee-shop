import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Product } from "../shared/models/product.model.ts"

const products: Array<Product> = [
  {
    id: "1",
    name: "Hundred Mil Club Hoodie",
    price: 60.49,
    image: "https://img.represent.com/uploads/f1f7a1fe327b194e1dce29b4ce56463d.jpg?&w=750",
    type: 3
  },
  {
    id: "2",
    name: "Hundred Mil Club T-Shirt",
    price: 36.29,
    image: "https://img.represent.com/uploads/10d39cb0f909e2e1e4ecdde6e8e53e11.jpg?&w=750",
    type: 4
  },
  {
    id: "3",
    name: "Hundred Mil Club Sweat",
    price: 48.39,
    image: "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750",
    type: 3
  },
  {
    id: "4",
    name: "Waves Hoodie",
    price: 60.49,
    image: "https://img.represent.com/uploads/242d3d7dd631b50eeea1a64625360952.jpg?&w=750",
    type: 3
  },
  {
    id: "5",
    name: "Hundred Mil Club Hat",
    price: 36.29,
    image: "https://img.represent.com/uploads/9532038d1edd2ec1262c68e79ce9fcbb.jpg?w=420",
    type: 2
  }
];

const getProducts = ({ response }: { response: any}) => {
  response.body = {
    success: true,
    data: products,
  };
};

const getProductsWithFilter = ({ request, response }: { request: any, response: any}) => {
  const filter = request.url.searchParams.get('filter');
  console.log(filter);

  var filteredProducts: Array<Product>;
  if(filter == 1){
    filteredProducts = products;
  }else{
    filteredProducts = products.filter(
      (product: Product) => (product.type == filter),
    );
  }
  
  response.body = {
    success: true,
    data: filteredProducts,
  };
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