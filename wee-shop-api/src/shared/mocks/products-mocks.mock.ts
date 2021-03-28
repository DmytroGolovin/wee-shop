import { ProductType } from "../enums/product-type.enum";
import { Product } from "../models/product.model";

// const products: Array<Product> = [
//     {
//       id: 1,
//       name: "Hundred Mil Club Hoodie",
//       price: 60.49,
//       image: "https://img.represent.com/uploads/f1f7a1fe327b194e1dce29b4ce56463d.jpg?&w=750",
//       type: ProductType.Hoodie
//     },
//     {
//       id: 2,
//       name: "Hundred Mil Club T-Shirt",
//       price: 36.29,
//       image: "https://img.represent.com/uploads/10d39cb0f909e2e1e4ecdde6e8e53e11.jpg?&w=750",
//       type: ProductType.Shirt
//     },
//     {
//       id: 3,
//       name: "Hundred Mil Club Sweat",
//       price: 48.39,
//       image: "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750",
//       type: ProductType.Hoodie
//     },
//     {
//       id: 4,
//       name: "Waves Hoodie",
//       price: 60.49,
//       image: "https://img.represent.com/uploads/242d3d7dd631b50eeea1a64625360952.jpg?&w=750",
//       type: ProductType.Hoodie
//     },
//     {
//       id: 5,
//       name: "Hundred Mil Club Hat",
//       price: 36.29,
//       image: "https://img.represent.com/uploads/9532038d1edd2ec1262c68e79ce9fcbb.jpg?w=420",
//       type: ProductType.Hat
//     },
//     {
//       id: 6,
//       name: "Waves // PewDiePie",
//       price: 30.63,
//       image: "https://img.represent.com/uploads/ded272656d9c99339cf08e4c6a6d9ef2.jpg?&w=750",
//       type: ProductType.Shirt
//     },
//     {
//       id: 7,
//       name: "Angry Tambourine // PewDiePie",
//       price: 30.63,
//       image: "https://img.represent.com/uploads/78dde314642b5e22332fbc7d8b967bbd.jpg?&w=750",
//       type: ProductType.Hat
//     },
//     {
//       id: 8,
//       name: "Happy Tambourine // PewDiePie",
//       price: 30.63,
//       image: "https://img.represent.com/uploads/f8e1c8d056cdb7977fd64f7f719f4942.jpg?&w=750",
//       type: ProductType.Hat
//     },
//     {
//       id: 9,
//       name: "Fully Stacked Diamonds // PewDiePie",
//       price: 40.84,
//       image: "https://img.represent.com/uploads/a103e5926c21eb8656f392d7e6d247b9.jpg?&w=750",
//       type: ProductType.Hoodie
//     },
//     {
//       id: 10,
//       name: "Fully Stacked Diamonds // PewDiePie",
//       price: 51.05,
//       image: "https://img.represent.com/uploads/596a62b7321adf3ec33e01149c8b227f.jpg?&w=750",
//       type: ProductType.Hoodie
//     }
//   ];

const products: Array<Product> = [
  {

    name: "Fully Stacked Diamonds // PewDiePie",
    price: 64.39,
    type: ProductType.Hoodie,
    image: "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750",
    models: [
      {
        color: "Black",
        mainImage: "https://img.represent.com/uploads/596a62b7321adf3ec33e01149c8b227f.jpg?&w=750",
        images: [
          "https://img.represent.com/uploads/596a62b7321adf3ec33e01149c8b227f.jpg?&w=750"
        ],
        sizes: [
          {
            isAvailable: true,
            size: "S"
          },
          {
            isAvailable: true,
            size: "M"
          },
          {
            isAvailable: true,
            size: "L"
          }
        ]
      }
    ]
  },
  {
    name: "Hundred Mil Club Sweat",
    price: 64.39,
    type: ProductType.Hoodie,
    image: "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750",
    models: [
      {
        color: "Black",
        mainImage: "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750",
        images: [
          "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750",
        ],
        sizes: [
          {
            isAvailable: true,
            size: "S"
          },
          {
            isAvailable: true,
            size: "M"
          },
          {
            isAvailable: true,
            size: "L"
          }
        ]
      }
    ]
  }
];

  export = products;