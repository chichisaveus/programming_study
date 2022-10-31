let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  name: '사과',
  color: 'red',
};

let orange = apple; // 0x1234 객체의 주소가 복사됨

orange.name = '오렌지'; // 이렇게 되면 apple이 보는 객체와 orange가 보는 객체가 동일한 객체이므로 사실상 둘다 바뀐다고 할 수 있다.
console.log(apple);
console.log(orange);
