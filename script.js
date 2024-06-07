let display = document.getElementById('display');
let startStopButton = document.getElementById('startStop');
let resetButton = document.getElementById('reset');
let timerInput = document.getElementById('timerInput');

let timer;
let seconds = 0;
let isRunning = false;
let isTimer = false;

startStopButton.addEventListener('click', () => {
    if (!isRunning) {
        let timerValue = parseInt(timerInput.value);
        if (!isNaN(timerValue) && timerValue > 0) {
            isTimer = true;
            seconds = timerValue;
            updateDisplay();
        } else {
            isTimer = false;
        }
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
        isRunning = true;
    } else {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
        isRunning = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    isTimer = false;
    startStopButton.textContent = 'Start';
    updateDisplay();
});

function updateTime() {
    if (isTimer) {
        seconds--;
        if (seconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            isTimer = false;
            startStopButton.textContent = 'Start';
            alert('Time\'s up!');
        }
    } else {
        seconds++;
    }
    updateDisplay();
}

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    display.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
