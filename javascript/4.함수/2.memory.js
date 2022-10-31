function add(a, b) {
  return a + b;
}

const sum = add; // 합수를 할당한다는건, 함수의 주소를 복사하는 것임. add와 sum은 동일한 함수를 호출하게 될 것이다.

console.log(sum(1, 2));
console.log(add(1, 2));
