let [hours, minutes, seconds] = [0, 0, 0];
const displayTime = document.getElementById("displayTime");
let timer = null;

function updateDisplay() {
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function stopWatch() {
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

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function watchReset() {
  watchStop();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
}
