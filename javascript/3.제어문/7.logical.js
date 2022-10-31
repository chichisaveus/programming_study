// 논리연산자 logical operator
// && 그리고
// || 또는
// ! 부정
// !! 불리언 값으로 변환되는 버젼

let num = 21;
if (num >= 0 && num < 9) {
  console.log('up');
}

if (num != 8) {
  console.log('pray');
}

// 논리 연산 연습

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log(!'text'); // false
console.log(!!'text'); // true
