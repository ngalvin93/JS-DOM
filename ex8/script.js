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
    listItem.innerHTML = taskText
    document.querySelector('#todo-list').appendChild(listItem);
}

// this marks the item as done
let list = document.querySelector('#todo-list');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName) {
        ev.target.classList.add = ('complete');
    } else {
        console.log('this is false');
    }
});