// static  정적 프로퍼티, 매서드
class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 인스턴스 레벨의 매서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    //클래스 레벨의 메서드에서는 this를 참조할수 없음
    return new Fruit('banana', 'blablabla');
  }
}

// 인스턴스 레벨의 매서드와 프로퍼티는 꼭 생성된 인스턴스를 통해서 호출해야한다.

const apple = new Fruit('apple', 'blablabla');
const orange = new Fruit('orange', 'blablabla');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.name);
apple.display();

// static 레벨의 매서드는  아래와 같이 사용한다
const banana = Fruit.makeRandomFruit();
console.log(banana);
banana.display();
