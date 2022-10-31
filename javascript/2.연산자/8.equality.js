// 동등비교 관계 연산자 (equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같아야한다.
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); // 타입은 다르지만 true로 나온다... 왜? '2" 문자열안의 숫자 2는 숫자로 변환되기때문이다.
console.log(2 === '2'); // 타입까지 비교하는 걸 쓰면 false가 나온다. 왠만하면... 코딩시엔 이걸써라... 타입까지 같아야지...

console.log('=========================');
console.log(true == 1); // true가 나온다.
console.log(true === 1); //  false가 나온다.

console.log('=========================');

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // 이건 결과가 뭐나올까??? 구성이 같은 obj끼리의 비교..결과는???? false임 왜? obj1,2는 각각 서로 다른 '주소'를 의미하기 때문이다.

console.log(obj1.name == obj2.name); // 이건 true 각각 오브젝트 안의 내용물을 비교하는것이기에

console.log('=========================');

let obj3 = obj2;

console.log(obj3 == obj2);
console.log(obj3 === obj2);
