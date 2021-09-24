// document.write("hi");
var h2 = document.createElement("h2");
var textNode = document.createTextNode("hello");
h2.appendChild(textNode);
document.querySelector("body").appendChild(h2);

const hello = document.querySelector("h2");
const body = document.querySelector("body");
console.log(hello);
hello.style.color = "white";
body.style.background = "purple";

function Resize(event) {
  console.log(event.target.innerWidth);
  if (event.target.innerWidth >= 800) {
    body.style.background = "yellow";
  } else if (event.target.innerWidth >= 600) {
    body.style.background = "purple";
  } else {
    body.style.background = "blue";
  }
}

window.addEventListener("resize", Resize);
//question!!!!!!!!!
//index.js만 손대긴 했지만, 만약 HTML파일을 건들면 된다면
//<h2>hello</h2>를 만들면 될 것이다.
//의문인 점은 왜 현재 이 사이트 https://codesandbox.io/s/empty-blueprint-forked-jiyp9?file=/src/index.js
//에서는 바로 안나오고, browser에서 https://jiyp9.csb.app/를 치면 제대로 나오는지 모르겠다.
