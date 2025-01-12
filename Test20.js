// 함수에서 객체로 파라미터를 받을때 너무 많은수의 프로퍼티가 있다면 비구조화를 고려하라

const locations = {
  EARTH: {
    name: "지구",
    resource: "동식물",
  },
  MOON: {
    name: "달나라",
    resource: "철광석",
  },
  MARS: {
    name: "화성",
    resource: "적색토",
  },
};

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

const users = [
  {
    name: "Aaron",
    age: 10,
    job: "Developer",
    address: {
      location: "Earth",
    },
  },
  {
    name: "Baron",
    age: 20,
    job: "Product_Owner",
  },
  {
    name: "Caron",
    age: 30,
    job: null,
    address: {
      location: "Moon",
    },
  },
];

// 해당 유저의 이름은 Aaron이고, 나이는 10살 이며, 직업은 개발자(이)고, 지구에 삽니다.
// 해당 유저의 이름은 Baron이고, 나이는 20살 이며, 직업은 기획자(이)고, 어딘가에 삽니다.
// 해당 유저의 이름은 Caron이고, 나이는 30살 이며, 직업은 무직(이)고, 달나라에 삽니다.

const userMap = users.map((user) => {
  const { name: arronName, age: arronAge } = user;
  user.job = user.job || "noJob";
  user.address = user.address || "noAddress";

  const jobInfo = jobs[user.job.toUpperCase()];
  const jobName = jobInfo ? jobInfo.name : "무직";

  const addressInfo =
    locations[user.address.location ? user.address.location.toUpperCase() : ""];
  const addressName = addressInfo ? addressInfo.name : "어딘가";

  return `해당 유저의 이름은 ${arronName}이고, 나이는 ${arronAge} 이며, 직업은 ${jobName}(이)고,  ${addressName} 삽니다.`;
});

console.log(userMap);
