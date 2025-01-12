// - 아까전에 본 실습은 `for` 구문과 `convert` 함수를 통해 배열을 원하는 배열로 변환했는데
// - `map` 과 객체 프로퍼티 초기화 단축을 활용하여 매우 간단하게, 새 객체를 만들어보자

const result = {
  success: false,
  body: [
    {
      name: "Aaron",
      age: 10,
      address: null,
    },
    {
      name: "Baron",
      age: 20,
      address: {
        location: "Earth",
      },
    },
    {
      name: "Caron",
      age: 30,
      address: null,
      job: "Developer",
    },
  ],
};

const convert = ({ name, age, address, job }) => ({
  name,
  age,
  address: address?.location || "주소 없음",
  job: job || "직장 없음",
});

const converted_users = result.body.map(convert);

console.log(converted_users);
