// 삼항 조건 연산자 ternary operator
// 조건식 ? 참인경우 : 거짓인 경우
let fruit = 'orange';
if (fruit === 'orange') {
  console.log('apple');
} else {
  console.log('orange');
}

// 위 if else와 정확히 동일한 한줄 코드임. 좀더 간편한 버젼
fruit === 'apple' ? console.log('apple') : console.log('orange');

// 이렇게 삼합 조건을 값 대입에도 쓸수있다.
let emoji = fruit === 'apple' ? 'apple' : 'orange';
