// 함수내부에서 외부로 부터 주어진 인자의 값을 변경하는 것은 매우 안좋은 습관이다. 예시를 보자
// 만약 상태변경이 필요한 경우엔, 새로운 상태를(오브젝트,값)을 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사
// 따라서 객체값은... 변경될 소지가 있음...

function display(num) {
  console.log(num);
}

const value = 4;
display(value);

// 만약 함수 안에서 num을 새로 변경하면 value2값을 아무리 뭘 줘도 안먹힘
function display2(num) {
  num = 5;
  console.log(num);
}

const value2 = 4;
display2(value2);
// 이경우는 함수에선 값이 안먹혀도 어째든 원시값 value2는 여전히 4의 값을 유지한다.

// 객체인경우 심각한 예시를 하나 보여주겠다.
function displayobj(obj) {
  obj.name = 'Bob'; // 이게 매우 잘못된 코딩.... 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경하면 안된다....
  console.log(obj);
}
const ellie = { name: 'Ellie' };
displayobj(ellie);
console.log(ellie);
// 놀랍게도 함수를 실행했을 뿐인데 본래 ellie객체의 name값이 아예 변경되버림... 단순히 함수 return값만 bob으로 바뀐게 아님...ㅈ된거지...

// 다시 좀 제대로 수정하면....

function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트 만들기!
}
