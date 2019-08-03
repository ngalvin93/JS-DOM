// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let button = document.querySelector('#section-header') // selects button
button.addEventListener('click', function () {
    let sectionText = document.querySelector('#section');
    if (sectionText.style.display === "none") {
    sectionText.style.display = "block";
    } else {
        sectionText.style.display = "none";
    }
})

// button.onclick = dissapear
// function dissapear () {
//     let sectionText = document.querySelector('#section');
//     sectionText.style.display = "none";
// };