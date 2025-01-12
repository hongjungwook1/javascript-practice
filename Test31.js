const api = require("./test-tools/api");

async function main() {
  const promise = new Promise((reslove, reject) => {
    console.log("setTimeout 호출 직전");
    setTimeout(() => {
      console.log("setTimeout 호출 완료");
      reslove({
        id: 1,
        name: "Aaron",
        email: "aaron@example.com",
        age: 10,
      });
    }, 1000);
  });

  console.log(promise);
  console.log("promise 대기");
}

main();
