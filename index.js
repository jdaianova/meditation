const startButton = document.querySelector('#button');
const timer = document.querySelector('.timer');

startButton.onclick = () => {
    const timeOfMeditation = document.querySelector('#input').valueAsNumber;
    
    if (timeOfMeditation > 0) {
    document.querySelector('#input').style.display = 'none';
    document.querySelector('.enter-time').style.display = 'none';
    let countdown = timeOfMeditation * 60;
    document.querySelector('.audio').play(); 
    document.querySelector('.video').play();

    let timerId = setInterval(() => {
        let min = Math.floor(countdown / 60);
        let sec = countdown % 60;
        if (sec <= 9) {
            sec = "0" + sec;
        };
        if (min <= 9) {
            min = "0" + min;
        };
        timer.textContent = `${min} : ${sec}`;
        countdown--;
        if (countdown < 0) {
            countdown = 0;
            clearInterval(timerId);
            history.back();
        };
    }, 1000);
    startButton.textContent = 'Enjoy the sounds ';
}
};
