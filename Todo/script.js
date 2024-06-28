document.addEventListener('DOMContentLoaded', function() 
{
    let button = document.getElementById('button');
    let todoList = document.getElementById('list');
    let input = document.getElementById('todo');

    let todos = [];
    let count = 0;
    
    window.onload = () =>
    {
        todos = JSON.parse(localStorage.getItem('todos')) || []
        todos.forEach(val => addtodo(val));
    }

    button.addEventListener('click',()=>{
        if(input.value.trim() !== ' ' && count < 6)
        {
            todos.push(input.value)
            localStorage.setItem('todos',JSON.stringify(todos))
            addtodo(input.value)
            input.value=''
        }
        else 
        {
            const result = document.getElementById('error');
            result.innerHTML = 'List is full'
            setTimeout(() => 
            {
                result.innerHTML = ' ';
            }, 3000);
            input.value = ' '
        }
    })

    function addtodo(todo){
        let para = document.createElement('p');
        para.innerText = todo;
        todoList.appendChild(para)
        count++;
        para.addEventListener('click',()=>{
            para.style.textDecoration = 'line-through'
            para.style.color = 'grey'
            remove(todo)
        })
        para.addEventListener('dblclick',()=>{
            todoList.removeChild(para)
            remove(todo)
        })
    }

    function remove(todo){
        let index = todos.indexOf(todo)
        if (index > -1) {
            todos.splice(index, 1);
        }
        count--;
        localStorage.setItem('todos',JSON.stringify(todos))
    }
})