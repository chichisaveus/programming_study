// 콜백함수

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 여기서 action 은 외부로 부터 전달받는 함수임 이걸 callback함수라고 한다.
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달 하는 것이 아니라.
//함수를 가리키고 있는 함수의 레처런스(참조값)이 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨.
calculator(1, 2, add); // 보다시피 add를 호출하진 않았지만, 함수의 주소를 call한것임.
calculator(1, 2, multiply);

function calculator2(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator2(1, -1, add); //이경우엔 아무값없이 리턴된게 없을것임.
calculator2(1, 3, add);
