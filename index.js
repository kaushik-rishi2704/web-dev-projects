const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const reset = document.getElementById('Reset');

let counter= document.querySelector('span')
let i=7;
function increaseNumber(count){
    count++;
    counter.textContent=count;
}
function decreaseNumber(count){
    count--;
    counter.textContent=count;
}
function resetNumber(count){
    count=0
    counter.textContent=count;
}
inc.addEventListener('click',increaseNumber(i))
dec.addEventListener('click',decreaseNumber(i))
reset.addEventListener('click',resetNumber(i))

if (i<0) {
    counter.style.color='red';
}
else if (i>0) {
    counter.style.color='green';
}


console.log(counter);