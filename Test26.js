// 프로젝트 개발 시 유저로부터 정보를 덜 받거나 정보를 표기할때 없는 데이터가 있을때 처리
// 1. 정보 표기 시 데이터가 없다면 undefined, null 이나 빈값을 보여주는게 아닌 기본값 노출
// 2. 정보 입력받을 시 데이터가 없다면 undefined, null 을 API 로 보내는게 아니라 기본값 전달
// 앞서 기본값을 표시할때 || 사용하도록 배웠으나, 이번엔 함수 기본 파라미터로 처리를 해보자

class Database {
  constructor() {
    this.data = [];
  }

  save({
    name,
    email = "empty",
    age,
    job = "Between Jobs",
    specialty = "Not Determined",
  }) {
    this.data.push({ name, email, age, job, specialty });
  }
}

const users = new Database();
const json = [
  {
    name: "Aaron",
    email: "aaron@gmail.com",
    age: 10,
    job: "Developer",
    specialty: "Backend",
  },
  {
    name: "Baron",
    email: "baron@gmail.com",
    age: 20,
    job: "Designer",
  },
  {
    name: "Caron",
    email: "caron@gmail.com",
    age: 30,
  },
  {
    name: "Daron",
    age: 40,
  },
];

json.map((each) => users.save(each));
console.log(users.data);

// [
//   {
//     name: 'Aaron',
//     email: 'aaron@gmail.com',
//     age: 10,
//     job: 'Developer',
//     specialty: 'Backend'
//   },
//   {
//     name: 'Baron',
//     email: 'baron@gmail.com',
//     age: 20,
//     job: 'Designer',
//     specialty: 'Not Determined'
//   },
//   {
//     name: 'Caron',
//     email: 'caron@gmail.com',
//     age: 30,
//     job: 'Between Jobs',
//     specialty: 'Not Determined'
//   },
//   {
//     name: 'Daron',
//     email: 'empty',
//     age: 40,
//     job: 'Between Jobs',
//     specialty: 'Not Determined'
//   }
// ]
