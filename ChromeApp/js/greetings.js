const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const date = new Date()

const greetingText = [
    ["좋은 하루를 시작해보아요!", "일을 하기전엔 스트레칭을 하면 건강에 좋답니다.", "아침밥은 먹으세요", "오늘 할 일들을 확인해보세요.", "나가기 전에 잊은 물건이 없는지 확인해봐요", "좋은 아침입니다", "즐겁게 하루를 보내봐요", "오늘은 좋은 일들이 많을 거예요"], ["바쁘더라도 밥은 먹으세요", "맛있는 점심을 먹으러 가죠!", "오늘은 무엇을 먹을까요?", "일도 쉬어가면서 천천히 하세요"],
    ["다시 즐겁게 일할 시간이예요", "조금만 더 힘내세요", "저녁 시간이 얼마 남지 않았어요"],
    ["곧 퇴근할 시간이예요", "길이 막히지 않았으면 좋겠네요", "저녁밥은 푸짐하게 먹으세요", "맛있는 건 0칼로리"],
    ["늦게 자면 몸에 좋지 않아요", "오늘 하루 만족하셨나요?", "하루를 마감하는 시간을 가져보아요", "이제 잘 시간입니다", "일도 자면서 해야해요"]
]

time = date.getHours()

function select_kinds(time) {
    if (time >= 8 && time <= 11)
        kind = 0
    else if (time >= 12 && time <= 13)
        kind = 1
    else if (time >= 14 && time <= 17)
        kind = 2
    else if (time >= 18 && time <= 22)
        kind = 3
    else
        kind = 4
    return kind
}


function onLoginSumbit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username)
}
loginForm.addEventListener("submit", onLoginSumbit)

function paintGreetings(username) {
    kind = select_kinds(time)
    console.dir(greeting)
    greeting.style.textalign = "center"
    greeting.innerText = `${greetingText[kind][Math.floor(Math.random() * greetingText[kind].length)]} \"${username}\"`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSumbit)
}
else {
    paintGreetings(savedUsername)
}