// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list'); //todo list UL

// Event Listeners
todoButton.addEventListener('click', addTodo); //addTodo is a JavaScript function
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //creating a li within the div from above

    // Check mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

     // Check trash Button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add('trash-btn');
     todoDiv.appendChild(trashButton);

    // Append to List
    todoList.appendChild(todoDiv);

    // Clear Todo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {
    // console.log(e.target); // shows output on console log of what is being clicked
    const item = e.target;
    
   // Delete 
    if(item.classList[0] == 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        // Animation 
        todo.addEventListener('transitioned', function(){
            todo.remove(); // remove element AFTER the animations of the fall calss
        });
    } 
    
    // Check mark
    if(item.classList[0] == 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    } 
}