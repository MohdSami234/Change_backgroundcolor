
const btn  = document.querySelector('#btn');

let colors = ['red','blue','black','white','orange', 'purple', 'black', 'yellow'];









btn.addEventListener('click',()=>{
    let index =  Math.floor(Math.random()*colors.length);
const back =  document.querySelector('#back');
    back.style.background = `${colors[index]}`;



})