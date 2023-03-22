const text = document.querySelector('.text');
const Scroll = document.querySelector('#scroll');
let pixel = 0;
let pixel1 = 0;
let time1;
let time2;
let time3 = null;
let time4 = null;
let time5;
let scrooll = 0;
let timer = 1;
let bool = true;
let bool1 = true;
let helpa = 0;
let helpa1 = 0;
let helpa2 = 0;

document.addEventListener('wheel', MouseScroll);
function MouseScroll(e) {
    if (bool == true) {
        time1 = setInterval(() => { timer++ }, 1000);
        bool = false;
    }

    pixel += Math.abs(e.deltaY);
    scrooll = pixel / timer;
    if (scrooll >= 1000) {
        helpa1 = scrooll / 1000;
        helpa2 = scrooll % 1000;

        text.innerHTML = parseFloat(helpa1).toFixed(0) + ',' + parseFloat(helpa2).toFixed(0) + ' scroll';
        if (helpa2 < 100) {
            text.innerHTML = parseFloat(helpa1).toFixed(0) + ',0' + parseFloat(helpa2).toFixed(0) + ' scroll';
        }
        if (helpa2 < 10) {
            text.innerHTML = parseFloat(helpa1).toFixed(0) + ',00' + parseFloat(helpa2).toFixed(0) + ' scroll';
        }
    } else {
        text.innerHTML = parseFloat(scrooll).toFixed(0) + ' scroll';
    }

    if (time3 != null) {
        clearTimeout(time3);
        clearInterval(time4);
    }

    time3 = setTimeout(() => {
        time4 = setInterval(() => {
            if ((scrooll - 100) >= 0) {
                scrooll -= 100;

                if (scrooll >= 1000) {
                    helpa1 = scrooll / 1000;
                    helpa2 = scrooll % 1000;

                    text.innerHTML = parseFloat(helpa1).toFixed(0) + ',' + parseFloat(helpa2).toFixed(0) + ' scroll';
                    if (helpa2 < 100) {
                        text.innerHTML = parseFloat(helpa1).toFixed(0) + ',0' + parseFloat(helpa2).toFixed(0) + ' scroll';
                    }
                    if (helpa2 < 10) {
                        text.innerHTML = parseFloat(helpa1).toFixed(0) + ',00' + parseFloat(helpa2).toFixed(0) + ' scroll';
                    }
                } else {
                    text.innerHTML = parseFloat(scrooll).toFixed(0) + ' scroll';
                }
            }
            else {
                scrooll = 0;

                if (scrooll >= 1000) {
                    helpa1 = scrooll / 1000;
                    helpa2 = scrooll % 1000;

                    text.innerHTML = parseFloat(helpa1).toFixed(0) + ',' + parseFloat(helpa2).toFixed(0) + ' scroll';
                    if (helpa2 < 100) {
                        text.innerHTML = parseFloat(helpa1).toFixed(0) + ',0' + parseFloat(helpa2).toFixed(0) + ' scroll';
                    }
                    if (helpa2 < 10) {
                        text.innerHTML = parseFloat(helpa1).toFixed(0) + ',00' + parseFloat(helpa2).toFixed(0) + ' scroll';
                    }
                } else {
                    text.innerHTML = parseFloat(scrooll).toFixed(0) + ' scroll';
                }
                clearInterval(time4);
            }
            if (scrooll == 0) {
                text.innerHTML = 'Скроль так быстро, на сколько сможешь';
                clearInterval(time1);
                clearInterval(time2);
                bool = true;
                bool1 = true;
                timer = 1;
                helpa = 0;
                scrooll = 0;
                pixel = 0;
            }
        }, 100)
    }, 1000);

    if (bool1 == true) {
        time2 = setInterval(() => {
            if (helpa < scrooll) {
                helpa = scrooll;

                Scroll.innerHTML = 'Твой лучший результат: ' + parseFloat(helpa1).toFixed(0) + ',' + parseFloat(helpa2).toFixed(0) + ' scroll';

                if (helpa2 < 100) {
                    Scroll.innerHTML = 'Твой лучший результат: ' + parseFloat(helpa1).toFixed(0) + ',0' + parseFloat(helpa2).toFixed(0) + ' scroll';
                }
                if (helpa2 < 10) {
                    Scroll.innerHTML = 'Твой лучший результат: ' + parseFloat(helpa1).toFixed(0) + ',00' + parseFloat(helpa2).toFixed(0) + ' scroll';
                }
            }
        }, 10);
        bool1 = false;
    }


}
