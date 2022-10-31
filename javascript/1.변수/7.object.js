// 앞서배운 number, string, boolen null undefined는 원시(primitive)라고 하여 memory상에 data(전역변수설정시 데이터에), stack(지역변수 설정시 스텍에) 이 두곳에 저장된다.
// 근데 object(객체)는 heap이라는 곳에 저장된다.
// 그리고 밑의 예제 apple이라는 object 설정시 apple 은 data에 "heap에 저장된 object의 주소"가 저장된다.

let apple = {
  name: 'apple',
  color: 'red',
  display: '00',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);
