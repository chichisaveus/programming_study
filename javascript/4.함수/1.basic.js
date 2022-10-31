//사용예제1

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

function add2(num1, num2) {
  return num1 + num2;
}

//사용예제2

let lastName = '김';
let firstName = '지수';
let fullName = `${lastName} ${firstName}`;
console.log(fullName);

let lastName2 = '박';
let firstName2 = '철수';
let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName2);

// 위 두개를 반복하는게 매우 귀찮... 이걸 function 으로 만들자

function fullName3(_firstName, _lastName) {
  return `${_firstName} ${_lastName}`;
}

console.log(fullName3('김', '지수'));
