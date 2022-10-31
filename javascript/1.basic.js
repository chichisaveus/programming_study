// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 ( 오래된 고전적인 방법 )
// 2. 클래스 사용

// 클래스 clas

class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출 되는 함수
  constructor(name, emoji) {
    this.naem = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

// 여기서 apple, orange는 class 의 "인스턴스"다.
const apple = new Fruit('apple', 'blablabla');
const orange = new Fruit('orange', 'blablabla');
console.log(apple.name);
console.log(orange.name);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴트도 아니다.
const obj = { name: 'ellie' };
