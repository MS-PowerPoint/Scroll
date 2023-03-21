const text = document.querySelector('.text');
const Scroll = document.querySelector('#scroll');
let pixel = 0;
let pixel1 = 0;
let time1;
let scrooll = 0;
let timer = 1;
let bool = true;

document.addEventListener('wheel', MouseScroll);
document.addEventListener(e);

function MouseScroll(e) {
    if (bool == true) {
        time1 = setInterval(() => { timer++; console.log(timer) }, 1000); w
        bool = false;
    }

    pixel += Math.abs(e.deltaY);
    scrooll = pixel / timer;
    text.innerHTML = parseFloat(scrooll).toFixed(2); +' scroll';

}
