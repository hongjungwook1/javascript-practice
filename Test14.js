// 바로 앞선 실습 13 에서 간략히 한 상품정보를 그대로 .forEach 이어 아래와 같이 출력하라

const detail_products = [
  {
    product_id: 1,
    name: "GeForce RTX 4090",
    category: {
      category_id: 23,
      name: "Graphic Card",
    },
    option: [
      {
        option_id: 12,
        name: "256GB",
        additional_price: 0,
      },
      {
        option_id: 13,
        name: "512GB",
        additional_price: 100000,
      },
    ],
    price: 400000,
  },
  {
    product_id: 2,
    name: "Nike Air Max 97",
    category: {
      category_id: 108,
      name: "Shoes",
    },
    option: [
      {
        option_id: 201,
        name: "Triple White",
        additional_price: 20000,
      },
      {
        option_id: 202,
        name: "Triple Black",
        additional_price: 40000,
      },
    ],
    price: 200000,
  },
  {
    product_id: 3,
    name: "MacBook Air 15 M3, 16GB",
    category: {
      category_id: 49,
      name: "Notebook",
    },
    option: [
      {
        option_id: 495,
        name: "16GB",
        additional_price: 0,
      },
      {
        option_id: 496,
        name: "32GB",
        additional_price: 320000,
      },
    ],
    price: 2200000,
  },
];

// 상품 1: GeForce RTX 4090 | 대표옵션: 256GB / 0원 | 가격: 400000
// 상품 2: Nike Air Max 97 | 대표옵션: Triple White / 20000원 | 가격: 200000
// 상품 3: MacBook Air 15 M3, 16GB | 대표옵션: 16GB / 0원 | 가격: 2200000

const products = detail_products.map((product, index) => {
  return `상품 ${index + 1}: ${product.name} | 대표옵션 : ${
    product.option[0].name
  } / ${product.option[0].additional_price} | 가격: ${product.price}`;
});
console.log(products);
