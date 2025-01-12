// - **앞선 실습에서 만들었던 함수를 더 간략하게 바꾸어보자**
// - 아래와 같은 상품의 상세점보를 간단한 상품 정보로 치환할때 **객체 프로퍼티 초기화 단축**을 쓰라
// - 함수가 객체를 반환할때 객체 프로퍼티 초기화를 사용하면 단순해지니 **변수명을 맞추도록 하고,**
// - 함수가 객체를 파라미터로 받아서 그 중 몇개를 객체로 반환한다면 **객체 비구조화까지 사용하라**

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

// const products = [
// 	{
//     product_id: 1,
//     name: 'GeForce RTX 4090',
//     category: 'Graphic Card',
//     option: { name: '256GB', additional_price: 0 },
//     price: 400000,
// 	},
// 	...
// ]

const productMap = detail_products.map(
  ({ product_id, name, category, option, price }) => ({
    product_id,
    name,
    category: category?.name || "카테고리 이름 없음",
    option: option[0]
      ? {
          name: option[0].name,
          additional_price: option[0].additional_price,
        }
      : "존재 하지 않음",
    price,
  })
);

// function productList(products) {
//   const result = products.flatMap(
//     ({ product_id, name, category: { name: categoryName }, option, price }) =>
//       option.map(({ name: optionName, additional_price }) => ({
//         product_id,
//         name,
//         category: categoryName,
//         option: { name: optionName, additional_price },
//         totalPrice: price + additional_price,
//       }))
//   );
//   return result;
// }

console.log(productMap);
