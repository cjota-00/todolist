// Selecoes de elementos
const textTodo = document.querySelector('.form-control input');
const addTodo = document.querySelector('.form-control button');
const todoList = document.querySelector('#todoList');
const backtodo = document.querySelector('.todo')
const todoCheck = document.querySelector('.todo h3');

//funcoes
const saveTodo = (text) =>{
    const todo = document.createElement("div");
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("add");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);
}


//Eventos
addTodo.addEventListener('click', (e)=>{
    e.preventDefault();
    const inputValue = textTodo.value;
    todoList.style.display ='block'
    if(inputValue){
        saveTodo(inputValue);
        textTodo.value = '';
        textTodo.focus();
    }
});

document.addEventListener('click', (e)=>{
    const targetEl = e.target
    const parentEl = targetEl.closest("div");
    if(targetEl.classList.contains('add')){
        console.log("clicou para finalizar")
        parentEl.classList.toggle('checked')
    }
    if(targetEl.classList.contains('remove')){
        parentEl.remove();
    }
})
