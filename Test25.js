// 배열에 원하는 만큼의 요소를 추가하려할때, 몇개의 요소를 추가할지 고정하고싶지 않을때
//- `User` 클래스 내 `addFavorites` 메서드를 만들어서 가장 아래와 같이 출력될 수 있도록하라

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.favorites = [];
  }
  addFavorites() {
    this.favorites.push(...arguments);
  }
}

const user = new User("Aaron", 10);
user.addFavorites("Book");
user.addFavorites("Cook", "Sports");
user.addFavorites("Drive", "Study", "Hiking");
console.log(user.favorites);

//[ 'Book', 'Cook', 'Sports', 'Drive', 'Study', 'Hiking' ]
