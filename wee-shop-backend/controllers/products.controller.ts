import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Product } from "../shared/models/product.model.ts"

const products: Array<Product> = [
    {
      id: "1",
      name: "Achillobator",
      price: 54.69
    },
    {
      id: "2",
      name: "Agilisaurus",
      price: 54.69
    },
    {
      id: "3",
      name: "Melanorosaurus",
      price: 54.69
    },
  ];

const getProducts = ({ response }: { response: any}) => {
  response.body = {
    success: true,
    data: products,
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
};