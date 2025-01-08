//장바구니에 담은 상품 중 품절되지 않은 상품만을 골라, 총 결제해야할 금액을 계산하라

const carts = [
  {
    quantity: 2,
    product: {
      category: "Graphic Card",
      name: "GeForce RTX 4090",
      price: 400000,
      soldout: true,
    },
  },
  {
    quantity: 1,
    product: {
      category: "Shoes",
      name: "Nike Air Max 97 Triple White",
      price: 200000,
      soldout: true,
    },
  },
  {
    quantity: 3,
    product: {
      category: "Notebook",
      name: "MacBook Air 15 M3, 16GB",
      price: 2200000,
      soldout: false,
    },
  },
  {
    quantity: 10,
    product: {
      category: "Food",
      name: "Cavendish & Harvey Sour Cherry",
      price: 5000,
      soldout: false,
    },
  },
];

const result = carts.filter((cart) => {
  return !cart.product.soldout;
});

const sumResult = result.map((cart) => {
  return cart.quantity * cart.product.price;
});

const reduceResult = sumResult.reduce((acc, current) => {
  return acc + current;
}, 0);

console.log(reduceResult);
