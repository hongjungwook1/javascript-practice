function convert(user) {
  const converted_user = {};

  if (!user.address) {
    const { address, ...restInfo } = user;
    Object.assign(converted_user, restInfo);
  } else if (!user.job) {
    const { job, ...restInfo } = user;
    Object.assign(converted_user, restInfo);
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
