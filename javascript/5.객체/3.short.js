const x = 0;
const y = 0;
const coordinate = { x: x, y: y };
console.log(coordinate);

// 키와 변수가 같으면... 그냥 줄여서
// const coordinate = { x, y } ; 라고 써도 된다.

function makeObj(name, age) {
  return {
    name: name, // 이것도 그냥 name
    age: age, // 이것도 그냥 age 라고 쓰면된다.
  };
}
