/////////// Practice 1

const todoListArrayP1 = [];
const inputTodoP1 = document.querySelector('.js-todo-name-p1');

document.querySelector('.js-add-btn-p1').addEventListener('click', function() {
  todoListArrayP1.push(inputTodoP1.value);
  inputTodoP1.value = '';
  console.log(todoListArrayP1);
})

/////////// Practice 2

const todoListArrayP2 = [];
const inputTodoP2 = document.querySelector('.js-todo-name-p2');
const outputTodoP2 = document.querySelector('.js-todoList-output-p2');

document.querySelector('.js-add-btn-p2').addEventListener('click', function() {
  todoListArrayP2.push(inputTodoP2.value);
  outputTodoP2.innerHTML += `<p>${todoListArrayP2[todoListArrayP2.length-1]}</p>`;
  inputTodoP2.value = '';
})

/////////// Todo List

const todoListArrayP3 = [];
const inputTodoP3 = document.querySelector('.js-todo-name-p3');
const outputTodoP3 = document.querySelector('.js-todoList-output-p3');

document.querySelector('.js-add-btn-p3').addEventListener('click', function() {
  todoListArrayP3.push(inputTodoP3.value);
  outputTodoP3.innerHTML += 
  `<p>
    ${todoListArrayP3[todoListArrayP3.length-1]} 
    <button onclick="delete_me();">Delete</button>
  </p>`;
  inputTodoP3.value = '';
})

function delete_me() {
  document.activeElement.parentElement.remove();
}