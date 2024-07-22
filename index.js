const input = document.getElementById('textarea');
const inputSet = document.getElementById('inputset');
const inputClear = document.getElementById('inputclear');
const tdList = document.querySelector('.tdlist');
 
function inputClick(e) {
    e.preventDefault()
    addTodo()
};

function inputClearBtn(){
    input.value = "";
}

function addTodo () {
    const content = document.createElement('div');
    content.classList.add('itemall');

    const item = document.createElement('p');
    item.classList.add('item');
    item.innerText = input.value;
    content.appendChild(item);

    if(input.value === '')
        return;

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML =  '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('check-button');
    content.appendChild(checkBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    trashBtn.classList.add('trash-button');
    content.appendChild(trashBtn);

    tdList.appendChild(content);
    input.value = '';

}

function tdDelOk(e) {
    const click = e.target;
    if(click.classList[0] === 'check-button'){
        const todoList  = click.parentNode.children[0];
        todoList.classList.add('checklist');
    }


    if(click.classList[0] === 'trash-button') {
        const todoList = click.parentNode;
        todoList.remove();
    }
};


inputSet.addEventListener('click', addTodo);
inputClear.addEventListener('click' ,inputClearBtn);
tdList.addEventListener('click' , tdDelOk)