// 접근자 프로퍼티 (Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${firstName}}`;
  }
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('수지', '김');
console.log(student.firstName);
console.log(student.fullName); // 이렇게 fullName이라는 class내에 매서드를 마치 프로퍼티 접근하듯이 하도록 해주는게 get이고 이때 get이 작동한다.
student.fullName = '김철수'; // 이렇게 할당을 할때는 set이 작동한다.
