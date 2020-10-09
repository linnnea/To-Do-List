//Icons
let changeIcon = '<i class="far fa-edit"></i>';
let completedIcon = '<i class="fas fa-check"></i>';
let removeIcon = '<i class="far fa-trash-alt"></i>';

let newTask = document.getElementById('new-task');
let addTaskToList = document.getElementById('button');
let incompleteList = document.getElementById('incomplete-tasks');
let completedList = document.getElementById('completed-tasks');

// If inputfield is empty
function checkErrors(newTask) {
    console.log(newTask.value);
    if (newTask.value === '') {
        alert('This cant be empty');
        return true;
    }
        return false;
}

addTaskToList.addEventListener('click', addToDoList);

function addToDoList() {
    if (checkErrors(newTask)) {
        return;
    }

    let inputContent = document.createElement('input');
    let newItem = document.createElement('li');
    let allButtons = document.createElement('div');
    let changeBtn = document.createElement('button');
    let completedBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    changeBtn.innerHTML = changeIcon;
    completedBtn.innerHTML = completedIcon;
    removeBtn.innerHTML = removeIcon;

    allButtons.className = 'd-flex justify-content-center buttons';
    newItem.className = 'd-flex flex-column justify-content-center align-items-center';
    inputContent.className = 'inputContent form-control rounded-pill';
    changeBtn.className = 'changeBtn btn btn-dark rounded-circle m-1';
    completedBtn.className = 'completedBtn btn btn-dark rounded-circle m-1';
    removeBtn.className = 'removeBtn btn btn-dark rounded-circle m-1';
    inputContent.value.className = 'inputContentValue';


    incompleteList.appendChild(newItem);
    inputContent.setAttribute('value', newTask.value);
    newItem.appendChild(inputContent);
    newItem.appendChild(allButtons);
    allButtons.appendChild(changeBtn);
    allButtons.appendChild(completedBtn);
    allButtons.appendChild(removeBtn);

    newTask.value = "";

    //change a task
    changeBtn.addEventListener('click', function(changeTask) {
        inputContent.disabled = !inputContent.disabled && inputContent.value !== '';
        if (inputContent.value === '') {
            alert('This cant be empty');
            return false;
        }
    })

    //complete a task - change btn
    completedBtn.addEventListener('click', function(completeTask) {
        if (inputContent.value === '') {
            alert('This cant be empty');
            return false;
        } else {
            completedList.appendChild(newItem);
            this.remove();
        }
    
        changeBtn.addEventListener('click', function(moveBackToIncomplete) {
            inputContent.disabled = false;
            incompleteList.appendChild(newItem);
            newItem.appendChild(completedBtn);
        })
    })

    //remove a task
    removeBtn.addEventListener('click', function(removeTask) {
        newItem.parentNode.removeChild(newItem);
    }, false);
        newItem.appendChild(removeBtn);
};




