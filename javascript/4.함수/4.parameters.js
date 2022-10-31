// 매개변수의 기본값은 무조건 undefined
function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}

add(1, 2, 3); // 인자보다 많이 넣으면 그냥 무시되고 인자만 넣어 계산된다.

// arguments를 쓰면, 인자값을 출력한다. 배열처럼 접근도 가능

// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨.

function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments[1]);
  console.log(arguments[0]); // arguments 인자에 각각 접근 가능
  console.log(arguments);
  return a + b;
}

console.log('======================================================');

// 만약 함수 인자에 아무것도 안넣었을때 디폴트 기본 값을 지정해 두려면?
function add(a = 1, b = 1) {
  // 이런식으로 값을 넣어주면 아무것도 안넣었을때 자동으로 들어간다.
  console.log(a);
  console.log(b);
  console.log(arguments[1]);
  console.log(arguments[0]); // arguments 인자에 각각 접근 가능
  console.log(arguments);
  return a + b;
}

add(); // 값을 안넣으면 디폴트값 1을 넣어서 계산한다.
add(3, 3); // 이렇게 값을 넣으면 이 넣은값으로 계산을 하고

console.log('======================================================');

// rest 매개변수 rest parameters
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers); // 인자를 얼마나 넣을지 전혀 모를때, 넣은 인자를 모조리 넣을때 사용한다.
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9); // 보면 첫번째 1,2는 a,b라는 인자에 할당되고, 나머지 숫자는 number라는 '배열'에 할당된다.
