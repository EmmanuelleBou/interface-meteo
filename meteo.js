const apiKey = "81c8b2a7b0faeb4f0013dea3ace5254a";
const weatherInfo = document.getElementById("weather-info");

function getWeather() {
  const cityInput = document.getElementById("city");
  const city = cityInput.value;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;
      const city = data.name;

      const weatherText = `${city}: ${temperature}°C, ${description}`;
      weatherInfo.innerText = weatherText;
      humidity.innerHTML = data.main.humidity + "%";
      windSpeed.innerHTML = data.wind.speed + "km/h";
      

      switch (data.weather[0].description) {
        case "clouds":
          weatherIcon.src = "images/Clouds.png";
          break;
        case "clear":
          weatherIcon.src = "images/sun.png";
          break;
        case "rain":
          weatherIcon.src = "images/rainy.png";
          break;
        case "mist":
          weatherIcon.src = "images/mist.png";
          break;
        case "snow":
          weatherIcon.src = "images/snow.png";
          break;
        case "haze":
          weatherIcon.src = "images/haze.png";
          break;
      }
    });

  switch (data.weather[0].main) {
    case "clouds":
      weatherIcon.src = "images/Clouds.png";
      break;
    case "clear":
      weatherIcon.src = "images/sun.png";
      break;
    case "rain":
      weatherIcon.src = "images/rainy.png";
      break;
    case "mist":
      weatherIcon.src = "images/mist.png";
      break;
    case "snow":
      weatherIcon.src = "images/snow.png";
      break;
    case "haze":
      weatherIcon.src = "images/haze.png";
      break;
  }
}
