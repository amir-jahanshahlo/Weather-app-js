"strict";
const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const apiKey = "01dceccfbe8bb90bbf015952e121e8b4";

searchBtn.addEventListener("click", () => {
  if (cityInput.value.trim() != "") updateWeatherinfo(cityInput.value);
  cityInput.value = "";
  cityInput.blur();
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && cityInput.value.trim() != "") {
    updateWeatherinfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

function getFetchData() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}`;
}

function updateWeatherinfo(city) {
  const weatheDate = getFetchData();
}
