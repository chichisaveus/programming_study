// 단항연산자 unary operators
// + (양)
// - (음)
// ! (부정)

let a = 5;
console.log(a);

a = -a; // -1*5
console.log(a);

a = +a; // +(-5) = -5
console.log(a);

boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + : 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인 할 수 있음

// console.clear();
console.log(+false); // false가 숫자로 바꾸면 뭘까? 0이다
console.log(+null); // null을 숫자로 바꾸면 뭘까? 0이다.
console.log(+''); // ''을 숫자로 바꾸면? 0이다.
console.log(+true); // true를 숫자로 바꾸면? 1이다.
console.log(+'text'); // 어떤 택스트가 존재하는걸 숫자로 바꾸면? nan이다. 왜? 즉, 텍스트는 숫자가 아닌데?? 0이든 1이든 숫자로 변환이 안된다는 의미임
console.log(+undefined); // undefined도 마찬가지로 숫자가 아니므로 nan이 나온다.

console.log(!1); // 1은 참이므로 이걸 부정하면 false가 나온다.
console.log(!!1); // !!을 두번쓰면 부정에 부정이므로 그냥 지금 숫자의 본래 boolean 타입으로 변환함을 뜻한다.
