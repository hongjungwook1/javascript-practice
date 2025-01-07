//아래의 copy_object 함수를 수정하라 : 객체와 배열이 변경되어도 원본은 바뀌지 않도록

var object = {
  name: "Aaron",
  age: 10,
  address: {
    location: "Earth",
  },
  cars: ["Ford", "Porche"],
};

function copy_object(object) {
  const copied = JSON.parse(JSON.stringify(object));
  return copied;
}

var copied = copy_object(object);

copied.name = "Baron";
copied.address.location = "Moon";
copied.cars.push("Aston Martin");
object === copied;
console.log(object);
console.log(copied);
