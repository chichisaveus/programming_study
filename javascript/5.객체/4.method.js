const apple = {
  name: ' apple ',
  display: function () {
    console.log(`${this.name}:'blablabla'`); // 객체자신에게 접근할때는 반드시 this를 써줘야 한다.
  },
};

apple.display(); // 객체안의 동적 영역을 호출함. 여기서 display 는 자신의 객체에서 name과 blablabla를 출력하는 역할임.
