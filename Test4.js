//화살표 함수 : 아래의 함수들에서 return 을 없애보자 = 간략하게 만들어보자

const convert = (object) => ({ name: object.name });
const user = { name: "Aaron", age: 10 };
const converted = convert(user);
console.log(converted);
