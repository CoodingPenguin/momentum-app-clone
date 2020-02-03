import "./styles.css";

const body = document.body;

// class name : 상태 별로 class name만 바꿔준다.
// 그래서 class name별로 다른 css가 적용되게 한다.
const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.remove(MEDIUM_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResize);
