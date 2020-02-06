// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// selectors
const detRange = document.querySelector(".js-range"),
    playContainer = document.querySelector(".js-sliderContainer"),
    slider = playContainer.querySelector(".js-slider"),
    guessContainer = playContainer.querySelector(".js-guessing"),
    input = guessContainer.querySelector("input"),
    button = guessContainer.querySelector("button"),
    resultContainer = playContainer.querySelector(".js-result"),
    spanPlay = resultContainer.querySelector(".js-result__play"),
    spanResult = resultContainer.querySelector(".js-result__result");

// variables
let maxNumber = 10,
    guessNumber = 0;

// functions

// generate random number in range
function genRandomNum(max) {
    return Math.floor(Math.random() * (Math.floor(max) + 1));
}

// warn if you are out of range
function warnOverflow() {
    spanPlay.innerText = "😫 You are out of range 😫";
    spanResult.innerText = "";
}

// warn if there is no input
function warnNoInput() {
    spanPlay.innerText = "😥 I need a number 😥";
    spanResult.innerText = "";
}

// paint the result of game
function paintResult(guess, answer) {
    if (parseInt(guess) === answer) {
        console.log("You win!");
        spanPlay.innerText = `YOU ${guess} = ANSWER ${answer}`;
        spanResult.innerText = "🎉 YOU WON! 🎉";
    } else {
        console.log("You lost!");
        spanPlay.innerText = `YOU ${guess} ≠ ANSWER ${answer}`;
        spanResult.innerText = "🔥 YOU LOST! 🔥";
    }
}

// handle click event
function handleClick(event) {
    event.preventDefault();
    const currentValue = input.value;
    guessNumber = currentValue;
    // console.log(`Guessing Number : ${guessNumber}`);

    const randomNumber = genRandomNum(parseInt(maxNumber));
    // console.log(`Random Number : ${randomNumber}`);

    resultContainer.classList.add("active");
    // if there is no input
    if (currentValue === "") {
        warnNoInput();
        // if you are out of range
    } else if (parseInt(currentValue) > maxNumber || parseInt(currentValue) < 0) {
        warnOverflow();
    } else {
        paintResult(guessNumber, randomNumber);
    }
}

// handle change of slider bar value
function handleChange(event) {
    event.preventDefault();
    const currentValue = slider.value;
    maxNumber = currentValue;
    detRange.innerText = `Generate a number between 0 and ${currentValue}`;

    // console.log(`Max Number : ${maxNumber}`);
}

function init() {
    slider.addEventListener("input", handleChange);
    button.addEventListener("click", handleClick);
}

init();
