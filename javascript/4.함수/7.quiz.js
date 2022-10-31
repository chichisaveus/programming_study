//주어진 숫자 만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야 함
//예를들어 순회하는 숫자를 다 출력하고 싶음
//혹은 순회하는 숫자의 두배값을 다 출력하고 싶음

function forfor(a) {
  for (i = 0; i <= a; i++) {
    console.log(i);
  }
}

function forfor2(a) {
  for (i = 0; i <= a; i++) {
    console.log(i * 2);
  }
}

function iterate(a, action) {
  action(a);
}

iterate(5, forfor2);
console.log('===================================================');
// 정답지

function iterate2(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

//callback함수
function log(num) {
  console.log(num);
}

function double(num) {
  console.log(num * 2);
}

//함수를 호출시엔
iterate2(5, log);
iterate2(5, double);
console.log('===================================================');
//콜백함수를 아예 화살표 무명함수로 설정해도 된다.
iterate2(5, (num) => console.log(num));
iterate2(5, (num) => console.log(num * 2));
//결과는 동일하다. 대신 화살표함수를 쓸는경우는 콜백함수가 간단한 경우겠지...

console.log('===================================================');

//실예시

// 예로는 setTimeout(callback, 1000);  1000밀리 세컨 뒤에 callback함수를 실행한다 이런 고차함수가 있는데

setTimeout(() => {
  console.log('3초뒤 이 함수가 실행될 예정입니다.');
}, 3000);
// 실행해보면 3000밀리세컨뒤에 위 화살표 함수가 실행됨을 알수있다.
