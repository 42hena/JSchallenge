# if, else, events.
<ul>
    <li>오늘의 강의: 바닐라JS로 크롬앱 만들기: From #4.0 to #4.7</li>
    <li>오늘의 과제: Make a number guessing game using Javascript!</li>
    <li>제출기간: 오늘은 2일 챌린지 입니다! 48시간을 드려요!</li>
</ul>

# 조건
0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
범위에는 음수가 포함될 수 없습니다.
실시간으로 범위 값을 업데이트해야 합니다.
유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
유저에게 게임의 승패를 알려야 합니다.
Hint:
To learn how to find random numbers watch this lecture


# Hint
<ol>
    <li>랜덤 한 숫자를 찾는 방법은 <a href="https://nomadcoders.co/javascript-for-beginners/lectures/2911">이 강의</a>에서 공부할 수 있습니다</li>
    <li><form> : 사용자로부터 입력을 받을 수 있는 입력 폼(form)을 정의할 때 사용하는 태그입니다. 입력된 정보를 제출할 수 있습니다.<a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/form">참고자료</a></li>
    <li>querySelector : CSS 선택자 형식을 사용해 HTML의 요소를 JS에서 사용하도록 가져올 수 있습니다. 다만, 같은 클래스명을 가지고 있다면 가장 첫 번째 요소만을 가지고 옵니다. <a href="https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector">참고 자료</a></li>
    <li>preventDefault() : 이벤트마다 가지고 있는 브라우저에서 발생하는 고유 동작을 막기 위해 사용할 수 있습니다. <a href="https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault">참고 자료</a></li>
    <li>Math.ceil() : 주어진 숫자를 올림 하기 위해 사용하는 함수입니다. 숫자는 정수 형태로 반환됩니다. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil">참고 자료</a></li>
    <li>parseInt() : 주어진 문자열을 정수형으로 변환해서 반환하는 함수입니다. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt">참고 자료</a></li>
    <li>innerHTML : 요소 내에 포함된 HTML을 나타내는 프로퍼티입니다. HTML을 읽어들이거나 설정할 수 있습니다.<a href="https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML">참고 자료</a></li>
</ol>



<ol>
    <li>if... else : 조건식의 결과에 따라 {}로 묶인 블록의 실행 여부를 결정하는 조건문입니다. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else">참고 자료</a></li>
    <li>classList : 요소에 적용된 클래스들의 이름을 리스트 형태로 반환해 줍니다. <a href="https://developer.mozilla.org/ko/docs/Web/API/Element/classList">참고자료</a></li>
    <li>remove : classList의 메서드입니다. classList를 통해 반환된 리스트 중에서 원하는 클래스를 제거할 수 있습니다. classList의 <a href="https://developer.mozilla.org/ko/docs/Web/API/Element/classList">참고자료</a>에서 확인할 수 있습니다.</li>
    <li>add : classList의 메서드입니다. classList의 리스트에 원하는 클래스를 추가할 수 있습니다. classList의 <a href="https://developer.mozilla.org/ko/docs/Web/API/Element/classList">참고자료</a>에서 확인할 수 있습니다.</a></li>
    <li>innerWidth : 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티입니다. <a href="https://developer.mozilla.org/ko/docs/Web/API/Window/innerWidth">참고자료</a></li>
</ol>