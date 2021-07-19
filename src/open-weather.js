import format from "date-fns/format";

let tempSetting = 0;

const conditionArray = [];

const stripValues = (string) => string.replace(/\D/g, "");

const convertKelvintoFahrenheit = (kelvin) =>
  Math.round((kelvin - 273.15) * (9 / 5) + 32);

const convertToPercent = (decimal) => Math.round(decimal * 100);

const fetchWeather = async (query) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Your search did not return any results");
    } else {
      const weatherData = await response.json();
      console.log(weatherData);
      conditionArray.splice(0, 1, weatherData.weather[0].description);
      document.getElementById("cityName").innerHTML = weatherData.name;
      document.getElementById("conditionName").innerHTML =
        weatherData.weather[0].main;
      document.getElementById(
        "mainTemperature"
      ).innerHTML = `${convertKelvintoFahrenheit(weatherData.main.temp)}°`;
      document.getElementById(
        "mainHigh"
      ).innerHTML = `H: ${convertKelvintoFahrenheit(
        weatherData.main.temp_max
      )}°`;
      document.getElementById(
        "mainLow"
      ).innerHTML = `L: ${convertKelvintoFahrenheit(
        weatherData.main.temp_min
      )}°`;
      document.getElementById("description").innerHTML = `Today: ${
        weatherData.weather[0].description
      }. The high will be ${convertKelvintoFahrenheit(
        weatherData.main.temp_max
      )}° and the low will be ${convertKelvintoFahrenheit(
        weatherData.main.temp_min
      )}°`;
    }
  } catch (error) {
    alert(error);
  }
};

const fetchForecast = async (query) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Your search did not return any results");
    } else {
      const forecastData = await response.json();
      console.log(forecastData);
      for (let i = 0; i <= 31; i += 1) {
        document.getElementById(`time${i}`).innerHTML = `${format(
          new Date(forecastData.list[i].dt_txt),
          "MMM d, H:00"
        )}`;
        document.getElementById(
          `rain${i}`
        ).innerHTML = `Rain: ${convertToPercent(forecastData.list[i].pop)}%`;
        document.getElementById(
          `image${i}`
        ).src = `http://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}@2x.png`;
        document.getElementById(
          `temp${i}`
        ).innerHTML = `${convertKelvintoFahrenheit(
          forecastData.list[i].main.temp
        )}°`;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const submitQuery = () => {
  document.getElementById("searchButton").addEventListener("click", () => {
    const city = document.getElementById("textInput").value;
    fetchWeather(`${city}`);
  });

  document.getElementById("searchButton").addEventListener("click", () => {
    const city = document.getElementById("textInput").value;
    fetchForecast(`${city}`);
  });

  document.getElementById("textInput").addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  });
};

const convertFahrenheitToCelsius = (fahrenheit) =>
  Math.round((fahrenheit - 32) * (5 / 9));

const convertCelsiusToFahrenheit = (celsius) =>
  Math.round(celsius * (9 / 5) + 32);

const convertTemperatures = () => {
  document.getElementById("convertButton").addEventListener("click", () => {
    if (tempSetting === 0) {
      document.getElementById(
        "mainTemperature"
      ).innerHTML = `${convertFahrenheitToCelsius(
        stripValues(document.getElementById("mainTemperature").innerHTML)
      )}°`;
      document.getElementById(
        "mainHigh"
      ).innerHTML = `H: ${convertFahrenheitToCelsius(
        stripValues(document.getElementById("mainHigh").innerHTML)
      )}°`;
      document.getElementById(
        "mainLow"
      ).innerHTML = `L: ${convertFahrenheitToCelsius(
        stripValues(document.getElementById("mainLow").innerHTML)
      )}°`;
      for (let i = 0; i <= 31; i += 1) {
        document.getElementById(
          `temp${i}`
        ).innerHTML = `${convertFahrenheitToCelsius(
          stripValues(document.getElementById(`temp${i}`).innerHTML)
        )}°`;
      }
      document.getElementById("description").innerHTML = `Today: ${
        conditionArray[0]
      }. The high will be ${stripValues(
        document.getElementById("mainHigh").innerHTML
      )}° and the low will be ${stripValues(
        document.getElementById("mainLow").innerHTML
      )}°`;
      document.getElementById("convertButton").innerHTML = `<b>°C</b> / °F`;
      tempSetting = 1;
    } else if (tempSetting === 1) {
      document.getElementById(
        "mainTemperature"
      ).innerHTML = `${convertCelsiusToFahrenheit(
        stripValues(document.getElementById("mainTemperature").innerHTML)
      )}°`;
      document.getElementById(
        "mainHigh"
      ).innerHTML = `H: ${convertCelsiusToFahrenheit(
        stripValues(document.getElementById("mainHigh").innerHTML)
      )}°`;
      document.getElementById(
        "mainLow"
      ).innerHTML = `L: ${convertCelsiusToFahrenheit(
        stripValues(document.getElementById("mainLow").innerHTML)
      )}°`;
      for (let i = 0; i <= 31; i += 1) {
        document.getElementById(
          `temp${i}`
        ).innerHTML = `${convertCelsiusToFahrenheit(
          stripValues(document.getElementById(`temp${i}`).innerHTML)
        )}°`;
      }
      document.getElementById("description").innerHTML = `Today: ${
        conditionArray[0]
      }. The high will be ${stripValues(
        document.getElementById("mainHigh").innerHTML
      )}° and the low will be ${stripValues(
        document.getElementById("mainLow").innerHTML
      )}°`;
      document.getElementById("convertButton").innerHTML = `°C / <b>°F</b>`;
      tempSetting = 0;
    }
  });
};

export { fetchWeather, submitQuery, fetchForecast, convertTemperatures };
