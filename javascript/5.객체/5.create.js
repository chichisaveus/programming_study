const apple = {
  name: ' apple ',
  display: function () {
    console.log(`${this.name}:'blablabla'`); // 객체자신에게 접근할때는 반드시 this를 써줘야 한다.
  },
};

const orange = {
  name: ' apple ',
  display: function () {
    console.log(`${this.name}:'BBBBBBBB'`); // 객체자신에게 접근할때는 반드시 this를 써줘야 한다.
  },
};

console.log(apple);
console.log(orange);

// 똑같은 객체 생성 너무 귀찮아... 귀찮아...

// 생성자 함수
// 생성자 함수는 대문자로 쓴다.
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

// 이렇게 생성자로 만든 틀에 바로 인자만 넣으면 객체가 바로바로 생성된다.
const apple1 = new Fruit('lisa', 'blablabla');
const orange1 = new Fruit('jane', 'blablabla');

console.log(apple1);
console.log(orange1);
console.log(apple1.name);
console.log(orange1.name);
apple1.display();
