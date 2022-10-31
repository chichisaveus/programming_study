class Tiger {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Dog {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
  play() {
    console.log('놀자');
  }
}

// 위 두개 class는 호랑이와 개 인데 두가지 모두 먹고 자는게 공통이다.

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger2 extends Animal {}
const tiger = new Tiger2('노랑');
console.log(tiger);
tiger.sleep();
tiger.eat(); // 보다시피 animal에 있는 클래스를 모두 사용가능함을 알수있다.

class Dog2 extends Animal {
  play() {
    console.log('놀자~'); //이렇게 상속후에도 dog만의 매서드를 넣을수도 있다.
  }
}
const dog = new Dog2('빨강');
console.log(dog);
dog.play();

// 만약 추가적인 외부인자를 받기위해 constructor를 만든다면 부모 class의 constructor도 들구와야한다.

class Dog3 extends Animal {
  constructor(color, ownerName) {
    super(color); // 여기서 super는 이건 color를 부모에게 전달한다는 의미임. 부모인 animal에선 color를 받기 때문임.
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자~'); //이렇게 상속후에도 dog만의 매서드를 넣을수도 있다.
  }
}

// 만약 부모의 매서드를 새로운 자식 class에서는 다르게 덮어쓰고싶으면?

class Dog4 extends Animal {
  constructor(color, ownerName) {
    super(color); // 여기서 super는 이건 color를 부모에게 전달한다는 의미임. 부모인 animal에선 color를 받기 때문임.
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자~'); //이렇게 상속후에도 dog만의 매서드를 넣을수도 있다.
  }

  eat() {
    super.eat(); // 이렇게 쓰면 일단 부모의 eat이 실행되고 아래 추가로 쓴게 실행된다.
    console.log('강아지가 앙앙 잡아먹는당!'); // 이렇게 새로 쓰면 걍 덮어쓰기된다.
  }
}
