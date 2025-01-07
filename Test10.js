const todo_list = [
  "[공부] 2025-01-20 : React Hook 종류에 대해 공부히기",
  "[약속] 2025-02-08 : Backend 개발자 친구와 강남역에서 만나기",
  "[정기] 2025-03-21 : 분기별 목표 정리 및 3개원간 평균 가계부 작성",
  "[운동] 2025-04-01 : 수영 등록하고, 바로 첫 수업 듣기",
  "[공부] 2025-05-08 : Next.js Tutorial 하면서 개인 문서 정리하기",
  "[독서] 2025-06-17 : 레이 달리오의 Principle 원칙 책 10% 읽기",
];

todo_list.forEach((todo, index) => {
  const title = todo.substring(0, 4);
  const date = todo.substring(5, 15);

  console.log(`${index} : TODO타입은 ${title}, 날짜는 ${date}`);
});
