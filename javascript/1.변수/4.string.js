// 문자열 타입
let string = '안녕하세요';
string = '안녕';
console.log(string);

// 특수문자 출력법
string = "'안녕'";
console.log(string);

// 줄바꿈  \n은 줄바꿈  \t 탭
string = '안녕  \n엘리야  \t  \t내이름은 \\\\u09AC';
console.log(string);

// 템플릿 리터럴 (template literal)
let id = '엘리';
let greetings = "'안녕!, "  + id + " \n 즐거운 하루 보내세요!'"
console.log(greetings);    // string이 다 합쳐진다.

// ' 이걸쓰는것보다 ` 꺽세를 쓰면 특수기호 없어도 인식한다. 엔터도 인식하고!
greetings = `안녕, ${id} 
즐거운 하루 보내용`;

