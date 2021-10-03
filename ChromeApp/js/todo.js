const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

console.log(toDoForm)
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDO(event) {
    console.log(event.target)
    console.log(event.target.parentElement)
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

    saveToDos()
}

function paintToDo(newTodo) {
    const div = document.createElement("div");
    div.style.display="flex";
    
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.id = "list-text"
    span.innerText = newTodo.text;
    const button = document.createElement("img");
    button.src="./img/Xbutton.png"
    button.style.width="15px";
    button.style.height="15px";
    button.addEventListener("click", deleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    li.style.gap="50px"
    div.appendChild(li)
    div.style.display="flex"
    div.style.alignItems="center"
    toDoList.appendChild(div);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item) {
    console.log("this is the turn of ", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}