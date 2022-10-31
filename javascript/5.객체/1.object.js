// Object literal { key : value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
    name: 'apple',
    'hello':'hand',
    0:1,
    ['hello-bye1']: 'hand2'
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name);   // 마침표 표기법
console.log(apple['hello-bye1']);   // 대괄호 표기법
console.log(apple['name']);

// 속성추가
console.log(apple.emoji) = 'kitty' ; // 없던 키를 추가해서 속성을 넣을 수도 있다.
console.log(apple['emoji2']) = 'kitty' ; // 마침표말고 대괄호 표기를 할땐 반드시 문자열 형태로 표기해야함

// 속성 삭제
delete apple.emoji2;  // 이렇게 하면 삭제됨.
