//Finish the code below to make the counter increment everytime you press the button
//Also, write the listener for the decrement button so that the counter decrements when you click it
var incrementButton = document.getElementById('increment'); //selects increment button
var decrementButton = document.getElementById('decrement'); //selects decrement button
var counter = document.getElementById('counter'); //selects counter
var count = 0; // This variable holds the current value of the counter!
incrementButton.addEventListener('click', function(){
    count += 1;
    counter.innerHTML = count;
});
decrementButton.addEventListener('click', function () {
    count -= 1;
    counter.innerHTML = count;
});