function refreshWeather(response) {
  let tempElement = document.querySelector("#temp");
  let temp = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descripElement = document.querySelector("#descrip");

  cityElement.innerHTML = response.data.city;
  descripElement.innerHTML = response.data.condition.discription;
  tempElement.innerHTML = Math.round(temp);
}
function searchCity(city) {
  let apiKey = "dffcdc392abt6650ob84a0bfdbddfd86";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
