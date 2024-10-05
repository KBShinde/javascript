const todoInput = document.getElementById('todo-input')
const todoBtn = document.getElementById('todo-btn')
const todoList = document.getElementById('todo-list')

function addTodo() {
    if(todoInput.value === '')  {
        alert('Please enter a task')
        return
    }

    const div = document.createElement('div')
    div.classList.add('todo')

    const li = document.createElement('li')
    li.classList.add('todo-item')
    li.textContent = todoInput.value
    div.appendChild(li)

    todoInput.value = ''

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete'
    div.appendChild(deleteBtn)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete-btn')
    completeBtn.textContent = 'Completed'
    div.appendChild(completeBtn)

    todoList.appendChild(div)
}

function handleTodo(e) {
    const item = e.target
    if(item.classList.contains('delete-btn')) {
        const todo = item.parentElement
        todo.remove()
    }
    if(item.classList.contains('complete-btn')) {
        const todo = item.parentElement
        const todoItem = document.querySelector('.todo-item')
        todoItem.style.textDecoration = 
        todoItem.style.textDecoration === 'line-through' ? 'none' : 'line-through'
    }
}

todoBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', handleTodo)