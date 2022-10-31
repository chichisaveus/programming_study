// return을 명시적으로 하지 않으면 자동으로 undefined이 반환된다.
// 어떤 값을 반환하지 않으면... 아무것도 반환하지 않음.
function add(a, b) {
  //return a + b;
}

const result = add(1, 2);
console.log(result);

// return을 함수 중간에 사용하게 되면 함수가 종료됨
// 사용 예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!  일종의 함수를 break하는 용도로도 사용됨 return이
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
