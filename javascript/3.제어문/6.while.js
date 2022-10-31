//while(조건) {}
// 조건이 false가 될떄까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log('아직살아있다!');
  if (i === 1000) {
    break;
  }
  i++;
}

// do while은 그냥 while과 달리 일단 do에 잇는걸 반드시 먼저 실행하고 while로 넘어간다.
isActive = false;
do {
  console.log('do-while 아직 살아있다!');
} while (isActive);
