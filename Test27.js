// 빈 데이터에 대한 기본값이 필요할땐 삼항연산자도 논리합 || 도 아닌 ?? 를 사용해야한다
// - 아래 데이터에 대한 기본값 처리를 위해 논리합 `||` 을 사용해보자 : `응시하지 않음`
//     - 0점이나 0원 이렇게 값이 Falsy 한 경우는 값이 없는건 아니기때문에 기본값 처리가 필요없다
const students = [
  {
    name: "Aaron",
    korean: 84,
    mathematics: 81,
    english: 50,
    science: 42,
  },
  {
    name: "Baron",
    korean: 0,
    mathematics: 100,
    science: 68,
  },
  {
    name: "Caron",
    korean: 0,
    mathematics: 25,
    english: 0,
    science: 100,
  },
  {
    name: "Daron",
    korean: 79,
    english: 24,
    science: null,
  },
];

const studentsDataMap = students.map((student) => ({
  name: student.name,
  국어: student.korean ?? "응시하지 않음",
  수학: student.mathematics ?? "응시하지 않음",
  영어: student.english ?? "응시하지 않음",
  과학: student.science ?? "응시하지 않음",
}));

console.log(studentsDataMap);
