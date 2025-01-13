// 객체나 배열을 변경할땐 순수함수/불변성 유지를 위해 꼭 새로운 객체나 배열을 만들어야한다

// - React 에서는 상태변경을 위해 꼭 아래와 같이 기존 객체를 복사하여 새 객체를 만들어야한다!
// - 아래 객체 중 일부 값만 변경하는 함수를 만들어라
//     - 꼭, 불변성을 유지하라 = 기존 객체를 건들지마라!

const products = [
  {
    category: "Graphic Card",
    name: "GeForce RTX 4090",
    price: 400000,
  },
  {
    category: "Shoes",
    name: "Nike Air Max 97 Triple White",
    price: 200000,
  },
];

const product_to_add_1 = {
  category: "Notebook",
  name: "MacBook Air 15 M3, 16GB",
  price: 2200000,
};

const product_to_add_2 = {
  category: "Food",
  name: "Cavendish & Harvey Sour Cherry",
  price: 5000,
};

// function add(list, element_to_add) {
//   const updatedProduct = {
//     ...list,
//     2: element_to_add,
//   };
//   return updatedProduct;
// }
// const updated = add(products, product_to_add_1);

// console.log(updated);
