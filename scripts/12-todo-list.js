/*
const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}
];
*/

const todoList = JSON.parse(localStorage.getItem('todos')) || [];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject; //destructuring. same as above.

    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button"
        onclick="
        todoList.splice(${i}, 1);
        localStorage.setItem('todos', JSON.stringify(todoList));
        renderTodoList();
        ">
          Delete
      </button>
    `;
    /*
    <p>${name} ${dueDate}
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        ">Delete</button>
      </p>
    */
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  const deleteAllGrid = document.querySelector('.js-todo-delete-all-grid');

  if(todoListHTML === '') {
    deleteAllGrid.classList.add('todo-delete-all-grid-hide');
  } else {
    deleteAllGrid.classList.remove('todo-delete-all-grid-hide');
  }
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElemect = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElemect.value;

  if(name && dueDate) {
    todoList.push({
      //name: name,
      //dueDate: dueDate
      name, //shorthand property
      dueDate
    });

    localStorage.setItem('todos', JSON.stringify(todoList));
  
    inputElement.value = '';
    dateInputElemect.value = '';
  
    renderTodoList();
  } else {
    alert('Enter both todo and due date')
  }

}

document.querySelector('.js-delete-all-todo-button').addEventListener('click', function() {
  if(confirm("Are you sure you want to delete all?")) {
    todoList.splice(0, todoList.length);
    localStorage.removeItem('todos');
    renderTodoList();
  }
})