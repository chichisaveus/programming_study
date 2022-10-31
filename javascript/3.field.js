// 접근제어자 - 캡슐화
// # : private
// 기본 : public

class Fruit {
  #name; //  이렇게 #을 붙이면 내부에서만 사용가능하고, 외부에서 접근 불가함.
  #emoji; //
  #type = '과일';
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', 'blablabla');
console.log(apple);
