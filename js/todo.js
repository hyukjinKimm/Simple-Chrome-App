const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

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
  paintToDo(newTodo);
}
toDoForm.addEventListener('submit', handleToDoSubmit);