let startTime = 0;       // timestamp when stopwatch starts
let elapsedTime = 0;     // total elapsed time in ms
let interval = null;     // interval ID

// DOM elements for each time box
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const centisecondsEl = document.getElementById("centiseconds");

// pad numbers with leading zeros
function pad(value) {
    return String(value).padStart(2, "0");
}

// update the display
function setTime() {
    const total = elapsedTime;

    const minutes = Math.floor(total / 60000);
    const seconds = Math.floor((total % 60000) / 1000);
    const centiseconds = Math.floor((total % 1000) / 10);

    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
    centisecondsEl.textContent = pad(centiseconds);
}

// called repeatedly by setInterval
function timer() {
    elapsedTime = Date.now() - startTime;
    setTime();
}

// start or resume the stopwatch
function startClock() {
    if (interval) return; // prevent multiple intervals

    startTime = Date.now() - elapsedTime; // resume from previous time
    interval = setInterval(timer, 10);     // update every 10ms
}

// stop/pause the stopwatch
function stopClock() {
    clearInterval(interval);
    interval = null;
}

// reset the stopwatch
function resetClock() {
    stopClock();
    elapsedTime = 0;
    setTime();
}

// initialize display
setTime();