const display = document.getElementById("display");
let timer = null; // holds id of the set interval to keep track of it
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {

    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // date.now is when it thinkss time bnegan
        timer = setInterval(update, 10); // calls update every 10 seconds
        isRunning = true;
    }
}

console.log(startTime);

function stop() {

    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset() {

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"; 

}

function update() {

    const currentTime = Date.now(); // the date irght now
    elapsedTime = currentTime - startTime; // the date now minus the time we started is the elapsed time

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // 1000 ms, 60 sec, 60 min

    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);

    let seconds = Math.floor(elapsedTime / 1000 % 60);

    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;



}