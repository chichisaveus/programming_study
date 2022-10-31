// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// counter 클래스 만들기

class Counter {
  #value; // 내부 프라이빗 field를 만들었음.
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  // getter를 통해 value를 읽을수 있음
  get value() {
    return this.#value;
  }
  // increment를 통해 value값을 증가 시킬수만 있다.
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);
