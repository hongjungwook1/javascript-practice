// 성공 1
// const promise = new Promise((resolve, reject) => {
//   resolve({ success: true });
// });
// promise.then((success_data) => {
//   console.log(success_data);
// });

// 성공 2
// const promise = Promise.resolve({ success: true });
// promise.then((success_data) => {
//   console.log(success_data);
// });

// 실패
// const promise = new Promise((resovle, reject) => {
//   reject({ success: false });
// });
// promise.catch((failled_data) => {
//   console.log(failled_data);
// });

// 실패 2
const promise = Promise.reject({ success: false });
promise.catch((failled_data) => {
  console.log(failled_data);
});
