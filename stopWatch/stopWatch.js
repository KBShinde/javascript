let timer;
let isRunning = false;
let minutes = 0; seconds = 0; miliSeconds = 0;

function updateDisplay () {
    const display = document.getElementById('display')
    display.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(miliSeconds).padStart(2, '0')}`
}

function start() {
    if(!isRunning) {
        isRunning = true 
        timer = setInterval(() => {
            miliSeconds++;
            if(miliSeconds === 60) {
                seconds++;
                miliSeconds = 0;
                if(seconds === 60) {
                    minutes++;
                    seconds = 0;
                }
            }
            updateDisplay()
        }, 10)
    }
};

function stop() {
    if(isRunning) {
        isRunning = false
        clearInterval(timer)
    }
};

function reset() {
    stop()
    minutes = 0 
    seconds = 0
    miliSeconds = 0
    updateDisplay()
}

document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)
document.getElementById('reset').addEventListener('click', reset)