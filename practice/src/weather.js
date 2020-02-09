const weather = document.querySelector(".js-weather");
const weatherDescription = document.querySelector(".js-weather-description");

const API_KEY = "c210ba676e8cbdaf4afbcaa287bc5abf";
const COORDS = "coords";

function getWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;

      const weatherToday = json.weather[0].main;
      const weatherImageURL = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
      const weatherImage = new Image(40, 40);
      weatherImage.src = weatherImageURL;

      weather.innerText = `${temperature}℃ @ ${place}`;
      
      const span = document.createElement("span");
      span.innerText = `${weatherToday}`;
      weatherDescription.appendChild(span);
      weatherDescription.appendChild(weatherImage);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
