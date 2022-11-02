// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라고 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 down!!
// 랜덤번호가 > 유저번호 up!!
// rest버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");//  document의 id를 통해서 요소를 선택한다는 의미
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameover = false;
let chanceArea = document.getElementById("chance-area");
let history = [];


playButton.addEventListener("click",play);  // addEventListener(이벤트 이름,이벤트발생시 실행함수 <- 여기서 인수로 쓰는 함수는 () 괄호는 넣지 않는다. )
resetButton.addEventListener("click",reset);  // addEventListener(이벤트 이름,이벤트발생시 실행함수 <- 여기서 인수로 쓰는 함수는 () 괄호는 넣지 않는다. )
userInput.addEventListener("focus",function(){userInput.value = "";}); // focus는 현재 커서혹은 위치에 딱 포커스 지정됬을때!


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;  // Math.floor는  소수점을 버린다. Math.random은 랜덤숫자 부르는 라이브러리...
    console.log('정답',computerNum);
};

function play() {
    let userValue = userInput.value;
    console.log(userValue);

    // 데이터 유효성 검사
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과100사이 숫자를 입력해 주세요"
        return;
    }
    if(history.includes(userValue)) {
        resultArea.textContent="이미 입력된 값입니다."
        return;
    }

    chances--;
    chanceArea.textContent=`남은기회 : ${chances} 번`  // 백틱 을 사용하면 동적인 문자열 만들수 있다.
    console.log("chances",chances);

    if(userValue < computerNum) {
        resultArea.textContent="up" ;// html에 직접 내용 변경
        console.log("up");
    } else if(userValue > computerNum) {
        resultArea.textContent="down" ; // html에 직접 내용 변경 
        console.log("down");
    } else {
        resultArea.textContent="맞췄습니다." ; // html에 직접 내용 변경
        console.log("맞췄습니다!");
        gameover=true;
    };

    history.push(userValue);
    console.log(history);

    if(chances < 1 ) {
        gameover=true;
    };
    if(gameover == true ) {
        playButton.disabled = true;
    };
};

function reset() {
    // user input창이 깨끗하게 정리가 되고
    userInput.value = ""
    // 새로운 번호가 생성되고
    pickRandomNum();
}


pickRandomNum();