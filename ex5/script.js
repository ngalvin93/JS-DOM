// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

let button = document.querySelector('#myButton'); // selects the button id and assigns it to a variable
button.onclick = addBox; // declare a function to the button
function addBox () { // function definition
let createNew = document.createElement('div'); //create a div node
let appendNew = document.querySelector('#boxContainer').appendChild(createNew); // appending the new div node to the selected id
appendNew.classList.add('box'); //adding a class to the new div node
}