const obj = {
  name: '엘리',
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key]; //key를 대괄호 표기하면 동적으로 사용가능.
}
console.log(getValue(obj, 'name'));

function addkey(obj, key, value) {
  obj[key] = value;
}

addkey(obj, 'job', 'engineer');
console.log(obj);

function deletekey(obj, key) {
  delete obj[key];
}
