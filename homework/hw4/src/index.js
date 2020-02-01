// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// selectors
const select = document.querySelector("select"),
  body = document.querySelector("body");

// constants
const USER_LS = "country",
  COUNTRY_IMG = {
    KR:
      "https://images.unsplash.com/photo-1516264665768-5525834929bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    GR:
      "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    TR:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    FI:
      "https://images.unsplash.com/photo-1515764741095-712094f48b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  };

// functions
function imageURL(country) {
  if (country === "KR") {
    return COUNTRY_IMG.KR;
  } else if (country === "GR") {
    return COUNTRY_IMG.GR;
  } else if (country === "TR") {
    return COUNTRY_IMG.TR;
  } else if (country === "FI") {
    return COUNTRY_IMG.FI;
  } else {
    return null;
  }
}

function setBackground(country) {
  if (country === "UNSELCETED") {
    body.style.backgroundImage = "";
  } else {
    body.style.backgroundImage = `url('${imageURL(country)}')`;
  }
}

function saveCountry(text) {
  localStorage.setItem(USER_LS, text);
}

function handleChange(event) {
  event.preventDefault();
  const currentCountry = event.target.value;
  saveCountry(currentCountry);
  setBackground(currentCountry);
}

function askForCountry() {
  select.addEventListener("change", handleChange);
}

function loadCountry() {
  const currentCountry = localStorage.getItem(USER_LS);
  if (currentCountry === null) {
    askForCountry();
  } else {
    select.value = currentCountry;
    setBackground(currentCountry);
  }
}

// init function
function init() {
  loadCountry();
}

init();
askForCountry();
