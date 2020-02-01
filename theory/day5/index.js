const title = document.querySelector("#title");

const BASE_COLOR = "rgb(247, 241, 227)";
const OTHER_COLOR = "rgb(52, 172, 224)";

function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
  console.log("Your WIFI is turned OFF!");
}

function handleOnline() {
  console.log("Your WIFI is turned ON!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
