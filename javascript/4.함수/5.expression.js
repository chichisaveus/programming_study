// 함수 선언문
// function name() {} 이게 기존에 배우던 방식임 근데 함수 표현식이라는 방식이 있음.

// 함수 표현식
// const name = function () {} 이런식으로 표현

// 보다시피 함수에 name부분이 따로 없음... 이걸 무명함수라고 한다.
// 이렇게 add라는
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

//위의 함수 표현식을 좀 더 간단하게 한줄로 표현하는 방법이 있음.

//화살표 함수
// const name = () => {} 이런식으로 표현

add2 = (a, b) => {
  return a + b;
};

// 더 간단하게는
add3 = (a, b) => a + b; //이렇게도 사용가능

//생성자 함수 라는 것도 있는데 이건 뒤 객체편에서 다루겟다.

// IIFE(Immedicately-Invoked Function Expression) 이라고 함수 선언한걸 바로 실행해보려고 사용하는 방식도 있음
// 보면 함수자체를 괄호로 묶어서 하나의 값으로 바꾸고 그걸 괄호 붙여서 실행
(function run() {
  console.log('happy');
})();
