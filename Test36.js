const api = require("./test-tools/api");

async function main() {
  const promise = api.post("/users", {
    name: "Aaron",
    email: "aaron@gmail.com",
    age: 10,
  });
  promise
    .then((result) => {
      console.log("> 성공 시 .then = " + result);
      return { id: result.id, name: result.name, email: result.email };
    })
    .then((previous) => {
      console.log("> 또 한번 더 .then = " + previous);
      return { id: previous.id, name: previous.name };
    })
    .then((previous) => {
      console.log("> 마지막으로 .then = " + previous);
      return { id: previous.id };
    })
    .catch((error) => {
      console.log("> 실패 시 .catch = " + error);
    })
    .then((previous) => {
      console.log("> 진짜 마지막으로 .then = " + previous);
    });
}

main();
