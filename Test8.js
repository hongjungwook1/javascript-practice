const users = [
  { name: "Aaron", age: 10, specialty: "frontend" },
  { name: "Baron", age: 20, specialty: "backend" },
  { name: "Caron", age: 30, specialty: "engineer" },
];

// for of 는 배열 순환
for (const user of users) {
  console.log(user.name);
}

// for in 는 객체 순환
for (const key in users) {
  console.log(users[key].name);
}
