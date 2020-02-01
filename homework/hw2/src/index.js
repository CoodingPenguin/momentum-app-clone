// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const colorPalette = ["#2E8CD5", "#914EAD", "#EEBC12"];
const body = document.querySelector("body");

function colorSelect(width) {
  if (width < 300) {
    body.style.backgroundColor = colorPalette[0];
  } else if (width < 600) {
    body.style.backgroundColor = colorPalette[1];
  } else {
    body.style.backgroundColor = colorPalette[2];
  }
}

function init() {
  colorSelect(window.innerWidth);
}

function handleResize() {
  const currentWidth = window.innerWidth;
  colorSelect(currentWidth);
}

init();
window.addEventListener("resize", handleResize);
