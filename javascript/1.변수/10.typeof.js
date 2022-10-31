// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환

let variable;
console.log(typeof variable); // variable이라는 변수의 자료형을 출력한다. 지금은 아무런 값도 할당하지 않아서 아무것도 안나온다.

variable = '';
console.log(typeof variable); //  이젠 할당된 자료의 자료형이 출력된다.

variable = 123;
console.log(typeof variable); //  이젠 할당된 자료의 자료형이 출력된다.

// 중요한 사실은... javascript는 변수의 자료형이 자료에 따라서 변한다!! 즉, 다른 언어처럼 자료형을 미리 명시할 필요가 없다!!

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
