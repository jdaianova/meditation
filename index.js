const timer = 0.5;
var countdown = timer * 60;

function countDown() {
    const timer = document.querySelector('.timer');
    let min = Math.floor(countdown / 60);
    let sec = countdown % 60;
    if (sec <= 0) {
        sec = "0" + sec;
    };
    if (min <= 0) {
        min = "0" + min;
    };
    timer.textContent = `${min} : ${sec}`;
    countdown--;
    if (countdown < 0) {
        countdown = 0;
        clearInterval(timerId);
    };
}

let timerId = setInterval(countDown, 1000);