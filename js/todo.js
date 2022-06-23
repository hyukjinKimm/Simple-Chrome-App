const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(e){
  const li = e.target.parentElement;

  li.remove();
}
function paintToDo(newTodo){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', deleteToDo)
  span.innerText = newTodo;
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}
toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
} else {

}