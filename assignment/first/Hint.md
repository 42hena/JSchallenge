# Objects, Arrays and Events
<ul>
    <li>오늘의 강의: 바닐라JS로 크롬앱 만들기: From #3.0 to #3.5</li>
    <li>오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하세요.</li>
    <li>제출기간: 익일 오전 6시까지</li>
</ul>

# Challenge goals:
<p>Using the boilerplate, make an app that does the following:
제공되는 보일러 플레이트를 사용해 아래의 예시와 동일하게 작동하는 애플리케이션을 만드세요.</p>


# 조건
<ol>
    <li>마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.</li>
    <li>마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.</li>
    <li>브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.</li>
    <li>마우스를 우 클릭하면 title이 바뀌어야 합니다.</li>
    <li>title의 색상은 colors 배열에 있는 색을 사용해야 합니다.</li>
    <li>.css 와 .html 파일은 수정하지 마세요.</li>
    <li>모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.</li>
    <li>모든 조건이 충족되지 못하면 ❌를 받습니다.</li>
</ol>

# Links
<a href="https://developer.mozilla.org/ko/docs/Web/Events">List of JS Events</a>

# Hint
<ul style="list-style:none;">
<li>Window : 현재 스크립트가 작동 중인 창을 나타내는 객체입니다. <a href="https://developer.mozilla.org/ko/docs/Web/API/Window">참고 자료</a></li>
<li>사용할 수 있는 이벤트</li>
    <ol>
        <li>mouseenter : 마우스가 위로 올라갔을 때 발생하는 이벤트입니다. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event">참고 자료</a></li>
        <li>mouseleave : 마우스가 떠났을 때 발생하는 이벤트입니다. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event">참고 자료</a></li>
        <li>contextmenu : 사용자가 요소를 마우스 우 클릭해 메뉴를 열 때 발생하는 이벤트입니다. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event">참고 자료</a></li>
        <li>resize : 브라우저 창의 사이즈가 변할 때 발생하는 이벤트입니다. <a href="https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event">참고 자료</a></li>
    </ol>