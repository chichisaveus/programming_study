// arithmetic operators은 산술 연산자를 말한다.
// +
// -
// *
// /
// % 나머지
// ** 지수

console.log(5 + 5);
console.log(5 / 5);
console.log(7 % 5);
console.log(5 ** 2);

// + 연산자 주의점!

let text = '두개의' + '문자를';

console.log(text);
text = '1' + 1; // 숫자와 문자를 더하면 문자열로 변환됨!!!

console.log(text); // 여기서 11이 나올텐데 이건 숫자 11일 아닌 문자 11이다.
