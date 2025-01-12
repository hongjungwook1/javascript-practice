// 환전 함수를 생성하는 함수 생성한 뒤, USD 달러, JPY 엔화, THB 바트 반환 함수 생성하기

function exchange_rate(type) {
  switch (type) {
    case "USD":
      return 1500; // = 1달러
    case "JPY":
      return 10; // = 1엔
    case "THB":
      return 40; // = 1바트
  }
}

function currency_exchanger(initial_value, type) {
  let money = initial_value;
  const rate = exchange_rate(type);

  function setMoney(value) {
    money = value;
  }

  function getMoney() {
    return money * rate;
  }
  return [setMoney, getMoney];
}

const [setUSD, getUSDtoKRW] = currency_exchanger(1000, "USD");
console.log(getUSDtoKRW());
setUSD(1230);
console.log(getUSDtoKRW());

const [setJPY, getJPYtoKRW] = currency_exchanger(1000, "JPY");
console.log(getJPYtoKRW());
const [setTHB, getTHBtoKRW] = currency_exchanger(1000, "THB");

console.log(getTHBtoKRW());
