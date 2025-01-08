// 내 예산으로 잡혀있는 금액으로 살 수 있는 특정 카테고리에 속한 모든 배달음식을 나열하라

const budget = 23000;
const favorites = ["chicken", "pizza"];
const foods = [
  {
    category: "chicken",
    name: "Hosik",
    price: 20000,
  },
  {
    category: "chicken",
    name: "Kentucky",
    price: 16000,
  },
  {
    category: "chicken",
    name: "BHC",
    price: 26000,
  },
  {
    category: "pizza",
    name: "Mr.Pizza",
    price: 26000,
  },
  {
    category: "pizza",
    name: "Pizza Hut",
    price: 30000,
  },
  {
    category: "meat",
    name: "MyeongRyun Jinsa",
    price: 15000,
  },
  {
    category: "meat",
    name: "Daedo Sikdang",
    price: 55000,
  },
];

const favoritesFoods = foods.filter((food) => {
  return (
    food.price < budget &&
    (food.category === favorites[0] || food.category === favorites[1])
  );
});

const foodMap = favoritesFoods.map((food) => {
  return food.name;
});
console.log(foodMap);
