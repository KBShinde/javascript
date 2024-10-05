let timer ;
let isRunning = false
let minutes = 0; seconds = 0; miliseconds = 0;

function updateDisplay() {
    const display = document.getElementById('display')
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(miliseconds).padStart(2, '0')}`
}

function start() {
    if(!isRunning) {
        isRunning = true
        timer = setInterval(() => {
            miliseconds++
            if(miliseconds === 60) {
                seconds++
                miliseconds = 0;
                if (seconds === 0) {
                    minutes++
                    seconds = 0;
                }
            }
            updateDisplay()
        },20)
    }
}
function stop() {
    clearInterval(timer)
    isRunning = false
}

function reset() {
    stop()
    minutes = 0
    seconds = 0;
    miliseconds = 0
    updateDisplay()
}

document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)
document.getElementById('reset').addEventListener('click', reset)