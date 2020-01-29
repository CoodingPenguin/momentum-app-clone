const title = document.querySelector("#title");

// title.innerHTML = "Hi! From JS";
// title.style.color = "pink";

// document.title = "I own you now";

function handleClicked() {
  title.style.color = "pink";
  // console.log("I have been resized");
}

title.addEventListener("click", handleClicked);
