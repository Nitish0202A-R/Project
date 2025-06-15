let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("start").onclick = function () {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
};

document.getElementById("stop").onclick = function () {
  clearInterval(timer);
  timer = null;
};

document.getElementById("reset").onclick = function () {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
};
