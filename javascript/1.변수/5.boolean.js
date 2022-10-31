// 불리언 타입

let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();  // 이전 console 내용 지우기

// Falshy 거짓인 값   특정 숫자나 문제 자체를 !! 느낌표 두개 붙이면 참이나 거짓으로 받아들이는것
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truethy참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);

// => 참거짓 인식에 대한 내용은 매우 중요하다.