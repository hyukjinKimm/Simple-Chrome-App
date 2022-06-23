const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;

  li.appendChild(span);
  toDoList.appendChild(li);
}
function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newTodo);
}
toDoForm.addEventListener('submit', handleToDoSubmit);