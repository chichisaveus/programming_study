let num = 2;
//num의 숫자가 짝수이면 'up', 홀수라면 'down'을 출력하도록
// if
// ternary

// two kind of method use ans expression

// if 방법
if (num % 2 === 0) {
  console.log('up');
} else {
  console.log('down');
}

// ternary 방법
num % 2 === 0 ? console.log('up') : console.log('down');

// ternary방법으로 값을 할당하기
let emoji = num % 2 === 0 ? 'up' : 'down';
console.log(emoji);
