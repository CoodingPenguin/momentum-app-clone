import "./styles.css";

// You're gonna need this
// I didn't use this because Date() is in KST
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock");
const clock = clockContainer.querySelector(".js-time");

// returns string of number according to the number of digits.
function insertZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  // returns milliseconds based on Korean Time
  const presentTime = Date.now();

  let remainTime = xmasDay.getTime() - presentTime;

  remainTime = parseInt(remainTime / 1000, 10);
  const seconds = remainTime % 60;
  remainTime = parseInt(remainTime / 60, 10);
  const minutes = remainTime % 60;
  remainTime = parseInt(remainTime / 60, 10);
  const hours = remainTime % 24;
  const days = parseInt(remainTime / 24, 10);

  clock.innerText = `${days}d:${insertZero(hours)}h:${insertZero(
    minutes
  )}m:${insertZero(seconds)}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
