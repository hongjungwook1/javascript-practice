function convert(user) {
  const converted_user = {};

  if (user.address === null) {
    Object.assign(converted_user, user);
    delete converted_user.address;
  } else if (user.job === undefined) {
    Object.assign(converted_user, user);
    delete converted_user.job;
  }
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
