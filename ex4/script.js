// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
// var button = document.getElementById('myButton');
// var boxArray = document.querySelectorAll('.box');
// boxArray.forEach(function(elem) {
//     elem.addEventListener("click", function() {
//         boxArray.style.backgroundColor = 'blue';
//     })
// }
// )



// button.addEventListener('click',function () {
//     document.querySelectorAll('.box').style.backgroundColor = 'blue';
// }
// )

let button = document.querySelector('#myButton');

// I tried using the forEach method here but I can't get it right
// button.addEventListener('click', function(){
//     let arr = document.getElementsByClassName('box')
//     arr.forEach(function (item) {
//         item.style.backgroundColor = 'blue'
//     })
// })


// THIS WORKS WITH FOR LOOP
// button.addEventListener ('click', function() {
//     let arr = document.getElementsByClassName('box');
//     for (i=0;i<arr.length;i++) {
//         arr[i].style.backgroundColor = 'blue'
//     }
// })

// WITH QUERY SELECTOR ALL
button.addEventListener('click', function(){
    let arr = document.querySelectorAll('.box')
    arr.forEach(function (item) {
        item.style.backgroundColor = 'blue'
    })
})