const text = document.querySelector('.text');
const Scroll = document.querySelector('#scroll');
let pixel = 0;
let time1;
let timer = 0;


document.addEventListener('wheel', MouseScroll);
document.addEventListener(e);




function MouseScroll(e) {

    time1 = setInterval(()=>{timer++},1000)
    if (e.deltaY != 0) {
        pixel += Math.abs(e.deltaY);
        pixel = pixel/timer;
        console.log(pixel);
        text.innerHTML = pixel+' scroll';
    }

}




