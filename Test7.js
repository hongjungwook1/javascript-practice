function convert(user) {
  const converted_user = {};

  user.address = user.address || "입력 없음";
  user.job = user.job || "직장 없음";

  Object.assign(converted_user, user);

  return converted_user;
}
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
const converted_users = [];
for (let i = 0; i < result.body.length; i++) {
  const converted_user = convert(result.body[i]);
  converted_users.push(converted_user);
}
console.log(converted_users);
