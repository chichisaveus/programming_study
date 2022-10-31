// null , undefined

let variable;    //변수선언
console.log(variable);     // 아무것도 변수에 안넣고 출력하면 undefined 출력됨


// 중요!!!!!!!!!!!
variable = null; // 이번엔 null이라는 명확한 빈값을 넣으면 그땐 undefined라고 출력되지않음 
console.log(variable);

// null과 undefined는 다르다.
// null은 없는게 명확한 상태
// undefined는 없는지 있는지 아직 결정되지 않은 상태를 말한다.

let activeItem; // 아직 활성화된 아이템이 없는지 아닌지 모르는 상태!! 없는 상태가 아닙니다!!!
activeItem = null; // 활성화된 아이템이 없는 상태!! 명확!

console.log(typeof null);        // null은 object로 인식하고 즉 메모리에 null이라는 상태를 할당함
console.log(typeof undefined);   // undefined는 object로 인식하지 않음.

