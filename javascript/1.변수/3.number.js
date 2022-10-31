// 자바스크립에선 숫자형은 아무거나 써도 다 출력이 된다.

let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수 도 알아먹는다.  0b라고 쓰면 된다.  (컴퓨터가 알아먹는 숫자)
let octal = 0o173; // 8진수 표현   0o을 쓰면 된다.
let hex = 0x7b; // 16진수 표현      0x을 쓰면 된다.
console.log(binary);
console.log(octal);
console.log(hex);

// 참고로 위의 binary, octal, hex , integer 등등은 그냥 변수명임... 아무 의미없음.

// 주의사항. 나누기할때는 조심해야해 0으로 나누면 안됨.

console.log(123 / 0); // 무한대 infinity나옴
console.log(123 / 'text'); // nan이 나온다. (not a number)

// 진짜 큰숫자를 쓸때는 n을 붙여야한다..끝에
let bigInt = 12345678901236849263593498719274912646n;
console.log(bigInt);
