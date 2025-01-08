// 함수에서 객체로 파라미터를 받을때 너무 많은수의 프로퍼티가 있다면 비구조화를 고려하라

const jobs = {
  DEVELOPER: {
    name: "개발자",
    salary: 250,
  },
  PRODUCT_OWNER: {
    name: "기획자",
    salary: 200,
  },
  PRODUCT_MANAGER: {
    name: "관리자",
    salary: 300,
  },
  DESIGNER: {
    name: "디자이너",
    salary: 180,
  },
};

const user = {
  name: "Aaron",
  age: 10,
  job: "Developer",
  address: {
    location: "Earth",
  },
};

// 해당 유저의 이름은 Aaron이고, 나이는 10살 이며, 직업은 개발자입니다.

const { name, age, jobName = "개발자" } = user;
console.log(
  `해당 유저의 이름은 ${name}이고, 나이는 ${age}살 이며, 직업은 ${jobName}입니다`
);
