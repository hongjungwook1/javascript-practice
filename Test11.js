const carts = [
  {
    quantity: 2,
    product: {
      category: "Graphic Card",
      name: "GeForce RTX 4090",
    },
  },
  {
    quantity: 1,
    product: {
      category: "Shoes",
      name: "Nike Air Max 97 Triple White",
    },
  },
  {
    quantity: 3,
    product: {
      category: "Notebook",
      name: "MacBook Air 15 M3, 16GB",
    },
  },
];

const cartsMap = carts.map((cart) => `${cart.product.name} ${cart.quantity}`);
const result = cartsMap.join(",");

console.log(result);
