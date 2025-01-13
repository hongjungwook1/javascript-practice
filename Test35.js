const api = require("./test-tools/api");

async function main() {
  const promise = api.post("/users", {
    name: "Aaron",
    email: "aaron@gmail.com",
    age: 10,
  });
  console.log(promise);
}

main();
