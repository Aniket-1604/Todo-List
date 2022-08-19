const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = ` 
    <li class="list-group-item d-flex justify-content-between align-items-center"> 
        <span>${todo}</span> 
        <i class="far fa-trash-alt delete"></i> 
    </li> 
    `;

    list.innerHTML += html;  //takes html template & adds it to html of list
};

addForm.addEventListener('submit', e => {    //waits for the event submit

    e.preventDefault();  //stop from reloading

    const todo = addForm.add.value.trim(); //removes spaces & takes todo as input

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();  //reset all input fields
    }
    

});
 //delete todos
 list.addEventListener('click' , e => {  //fire callback function
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();  //finds the parent class i.e. <li> and removes it
    }
 });