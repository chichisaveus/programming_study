// 조건문이지만 if와 좀 다른 성격의 조건문임.
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
let day = 6; // 0:월요일 , 1:화요일, ... 6 : 일요일
let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
}
//이렇게 일주일을 다 설정하려면... 7번 반복해야함..ㅜㅜ 이걸 좀더 쉽게 하기위해 switch라는 기능을 써본다.

switch (day) {
  case 0:
    dayName = '월요일';
    break; // 반드시 break를 써줘야한다.
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
}

let condition = 'okay'; // okay, good  -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good': // 이렇게 case를 두개 이어쓰면 okay, good 두경에 대해서 둘중하나인 경우  좋음을 출력하라는 의미
    text = '좋음';
    break; // 중요!! case를 쓸땐 반드시 break를 걸어줘야 한다.
  case 'bad':
    text = '나쁨';
    break;
}
console.log(test);
