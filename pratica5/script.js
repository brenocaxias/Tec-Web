document.addEventListener('DOMContentLoaded',()=>{
const button=document.getElementById('counterButton');
const clickDisplay= document.getElementById('clickCount');

let count=0;

button.addEventListener('click',() =>{
    count++;
    button.textContent= count;
    clickDisplay.textContent= count;
    });
});