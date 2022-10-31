// 연산 우선순위 priority

let a = 2;
let b = 3;
let result = a + b * 4; // 곱하기가 먼저임.
console.log(result);

result = a++ + b * 4; // 곱하기 먼저하고, 더한뒤에 a는 연산이 다 끝난뒤 ++ 해준다.
console.log(result);
console.log(a);

result = (a + b) * 4; // 괄호를 통해 우선순위를 더 빨리 할 수 있다.
