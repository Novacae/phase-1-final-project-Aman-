// API URL
function getWeatherData(location) {
  const apiKey = "289fc39b3f9720d66e288aa417571828";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherData = {
        temperature: data.main.temp,
        condition: data.weather[0].main,
        location: data.name,
      };
      return weatherData;
    });
}

function updateUI(weatherData) {
  const temp = document.querySelector("#temperature");
  const cond = document.querySelector("#condition");
  const loca = document.querySelector("#location");

  temp.textContent = `${weatherData.temperature}°C`;
  cond.textContent = weatherData.condition;
  loca.textContent = weatherData.location;
}

const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");

searchBtn.addEventListener("click", () => {
  const location = searchBar.value;
  getWeatherData(location)
    .then((weatherData) => {
      updateUI(weatherData);
    })
    .catch((error) => {
      console.log(error);
    });
});
//finally got prettier, never knew about it
