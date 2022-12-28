const timer = document.getElementById("timer");
const init = document.getElementById("init");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let time;

const updateTimer = () => {
  timer.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

const clock = () => {
  seconds++;
  if (minutes == 59 && seconds == 59) {
    seconds = 0;
    minutes = 0;
    hours++;
  } else if (seconds >= 59) {
    minutes++;
    seconds = 0;
  }
  updateTimer();
};

const startClock = () => {
  clearInterval(time);
  clock();
  time = setInterval(clock, 1000);
};

init.addEventListener("click", (event) => {
  timer.style.removeProperty("color");
  if (!time) {
    startClock();
  }
});

pause.addEventListener("click", (event) => {
  timer.style.cssText = `color:black`;
  clearInterval(time);
  time = undefined;
});

reset.addEventListener("click", (event) => {
  timer.style.removeProperty("color");
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(time);
  time = undefined;
  updateTimer();
});
