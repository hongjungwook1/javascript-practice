// API 조회한 값은 우리가 생각하는것처럼 단순하지 않다. 수많은 객체들이 Nested 얽혀있다.
// - 아래와 같이 복잡하게 얽혀있는 데이터를 유저에게 친절하게 하나하나 출력해보아라
// - 특정 데이터가 존재하지 않으면 기본값으로 표시할 수 있도록한다.

const result = [
  {
    post_id: 1,
    title: "자바스크립트 문법을 잘 사용하는 방법",
    desc: "닥치고 많이 만들고 작성하세요",
    writer: {
      user_id: 10,
      username: "Aaron",
      address: {
        city: "Mapo",
        postcode: "04212",
      },
    },
    replies: [
      {
        desc: "너무 유익한 글이네요!",
        writer: {
          user_id: 20,
          username: "Baron",
          ip: "10.0.0.1",
          statistics: {
            level: "Silver",
            replies: 32,
            posts: 10,
          },
        },
      },
      {
        desc: "장난하냐? 이딴게 글이라고",
        writer: {
          user_id: 30,
          username: "Caron",
          ip: "10.0.0.2",
          statistics: {
            level: "Iron",
            replies: 3,
            posts: 0,
          },
        },
      },
      {
        desc: "윗댓분 너무 인성파탄나셨네요",
        writer: {
          user_id: 40,
          username: "Daron",
          ip: "10.0.0.3",
          statistics: {
            level: "Gold",
            replies: 67,
            posts: 12,
          },
        },
      },
    ],
  },
  {
    post_id: 2,
    title: "자바 스프링 개발을 쉽게하는 방법",
    desc: "닥치고 많이 만들고 작성하세요",
    writer: {
      user_id: 20,
      username: "Baron",
    },
    replies: [],
  },
  {
    post_id: 3,
    title: "AWS 설계 및 인프라 설정 쉽게하는 방법",
    desc: "닥치고 많이 만드세요",
    writer: {
      user_id: 30,
      username: "Caron",
      address: {
        city: "Seoul",
        postcode: "03171",
      },
    },
    replies: [
      {
        desc: "맞아요 AWS 는 확실히 많이 만들어봐야하는듯",
        writer: {
          user_id: 50,
          username: "Earon",
          ip: "10.0.0.4",
        },
      },
    ],
  },
];

// const resultMap = result.map(({ title, desc, writer, replies }) => {
//   console.log(`
//     > 글 제목 : ${title}
//     > 글 내용 : ${desc}
//     > 글 쓴이 : ${writer.username} | 사는 곳 : ${
//     writer.address?.city ?? "미기재"
//   }
//       - 최근 댓글 : ${replies[0]?.desc}
//       - 최근 댓글 작성자 : ${replies[0]?.writer?.username} | ${
//     replies[0]?.writer?.statistics?.level ?? "등급없음"
//   }
//     `);
// });

const resultData = result.forEach(({ title, desc, writer, replies }) => {
  const writerName = writer.username;
  const writerCity = writer.address?.city ?? "미기재";
  const lastReply = replies[0]?.desc;
  const lastReplyWriterName = replies[0]?.writer?.username;
  const lastReplyWriterLevel =
    replies[0]?.writer?.statistics?.level ?? "등급없음";

  if (lastReply) {
    console.log(`
      > 글 제목 : ${title}
      > 글 내용 : ${desc}
      > 글 쓴이 : ${writerName} | 사는 곳 : ${writerCity}
        - 최근 댓글 : ${lastReply}
        - 최근 댓글 작성자 : ${lastReplyWriterName} | ${lastReplyWriterLevel}`);
  } else {
    console.log(`
      > 글 제목 : ${title}
      > 글 내용 : ${desc}
      > 글 쓴이 : ${writerName} | 사는 곳 : ${writerCity}`);
  }
});
