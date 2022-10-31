// 증가와 감소 연산자 increament & decrement operators
let a = 0;
console.log(a);
a = a + 1;
console.log(a);

// 이런경우

a++;
console.log(a);
a--;
console.log(a);

// 주의!! ++를 앞에쓰느냐 뒤에 쓰느냐에 따라 의미가 좀 다름... 차이는
// a++는 필요한 연산을 하고, 그뒤 값을 증가 시킴
// ++a는 값을 먼저 증가하고, 필요한 연산을 함

console.log('==========경계===========');

a = 0;
let b = a++; // a를 먼저 연산하고 그뒤에 a의 값을 증가시켜라 라는 의미임. 그래서 b에 a(0값)을 먼저 넣고 그뒤 a에 1을 넣음.
console.log(b);
console.log(a);
