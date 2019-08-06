/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/
// this adds the item to the list
document.querySelector('#add-button').onclick = addToList;
function addToList () {
    let listItem = document.createElement('li');
    let taskText = document.querySelector('#description').value;
    if (taskText.length > 0) {
    listItem.innerHTML = taskText
    document.querySelector('#todo-list').appendChild(listItem);
    // create a x button for each new li here
    document.querySelector('#description').value = ''; // this clears the input when the function is complete
    } else {
        alert("You must enter a task name!")
    }
}

// enter key to add item to the list
document.body.onkeyup = function (event) {
    if (event.keyCode == 13) {
        addToList();
    }
};

// this marks the item as done
let list = document.querySelector('#todo-list');
list.addEventListener ('click', function (event) {
    event.target.className += ('complete')
})

//this adds a delete button to each list item
let taskListItems = document.getElementsByTagName('li');
var i;
for (i=0;i<taskListItems.length;i++) {
    let span = document.createElement('span');
    let x = document.createTextNode('x');
    span.className = 'close';
    span.appendChild(x);
    taskListItems[i].appendChild(span);
}
//this adds the delete function
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
};