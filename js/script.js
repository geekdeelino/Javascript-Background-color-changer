// Main js
let button = document.querySelector('button');
let body = document.querySelector('body');
let colors = ['green', 'blue', 'yellow', 'red', 'grey', 'black', 'purple', 'white', 'navyblue', 'lightgreen'];

body.style.backgroundColor = 'maroon';
button.addEventListener('click' changeBackground);

function changeBackground(){
    let colorIndex = parseInt(math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex]
}
