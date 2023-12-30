//variables for buttons

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let hours = 0;
let minutes = 0;

//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for setinterval and timerstatus
let timeInterval = null;
let timerStatus = "stopped";

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTime = document.querySelector("#timer");
  displayTime.innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000);

startBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000);
    timerStatus = "started";
  }
});

stopBtn.addEventListener("click", function () {
  window.clearInterval(timeInterval);
  timerStatus = "stopped";
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector("#timer").innerText = "00:00:00";
});
