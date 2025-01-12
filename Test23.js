// 객체나 배열을 변경할땐 순수함수/불변성 유지를 위해 꼭 새로운 객체나 배열을 만들어야한다

// - React 에서는 상태변경을 위해 꼭 아래와 같이 기존 객체를 복사하여 새 객체를 만들어야한다!
// - 아래 객체 중 일부 값만 변경하는 함수를 만들어라
//     - 꼭, 불변성을 유지하라 = 기존 객체를 건들지마라!

const user = {
  id: 1,
  name: "Aaron",
  age: 10,
  address: "Earth",
  job: "Developer",
  specialty: "Backend",
};

function handleChange(user, property, value) {
  const updatedUser = {
    ...user,
    [property]: value,
  };
  return updatedUser;
}

const updated = handleChange(user, "job", "Designer");
console.log(updated);
