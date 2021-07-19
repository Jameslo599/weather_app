import { format, fromUnixTime } from "date-fns";

let tempSetting = 0;

const conditionArray = [];

const stripValues = (string) => string.replace(/\D/g, "");

const convertToPercent = (decimal) => Math.round(decimal * 100);

const fetchWeather = async (query) => {
  try {
    const coordinates = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    const coordinateData = await coordinates.json();
    console.log(coordinateData);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateData[0].lat}&lon=${coordinateData[0].lon}&units=imperial&exclude=minutely,alerts&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Your search did not return any results");
    } else {
      const weatherData = await response.json();
      console.log(weatherData);
      conditionArray.splice(0, 1, weatherData.current.weather[0].description);
      document.getElementById("cityName").innerHTML = coordinateData[0].name;
      document.getElementById("conditionName").innerHTML =
        weatherData.current.weather[0].main;
      document.getElementById("mainTemperature").innerHTML = `${Math.round(
        weatherData.current.temp
      )}°`;
      document.getElementById("mainHigh").innerHTML = `H: ${Math.round(
        weatherData.daily[0].temp.max
      )}°`;
      document.getElementById("mainLow").innerHTML = `L: ${Math.round(
        weatherData.daily[0].temp.min
      )}°`;
      document.getElementById("description").innerHTML = `Today: ${
        weatherData.current.weather[0].main
      }. The high will be ${Math.round(
        weatherData.daily[0].temp.max
      )}° and the low will be ${Math.round(weatherData.daily[0].temp.min)}°`;

      for (let i = 0; i <= 47; i += 1) {
        document.getElementById(`time${i}`).innerHTML = `${format(
          new Date(fromUnixTime(weatherData.hourly[i].dt)),
          "MMM d, H:00"
        )}`;
        document.getElementById(
          `rain${i}`
        ).innerHTML = `Rain: ${convertToPercent(weatherData.hourly[i].pop)}%`;
        document.getElementById(
          `image${i}`
        ).src = `http://openweathermap.org/img/wn/${weatherData.hourly[i].weather[0].icon}@2x.png`;
        document.getElementById(`temp${i}`).innerHTML = `${Math.round(
          weatherData.hourly[i].temp
        )}°`;
      }
    }
  } catch (error) {
    alert(error);
  }
};

const fetchCelsius = async (query) => {
  try {
    const coordinates = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    const coordinateData = await coordinates.json();
    console.log(coordinateData);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateData[0].lat}&lon=${coordinateData[0].lon}&units=metric&exclude=minutely,alerts&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Your search did not return any results");
    } else {
      const weatherData = await response.json();
      console.log(weatherData);
      conditionArray.splice(0, 1, weatherData.current.weather[0].description);
      document.getElementById("cityName").innerHTML = coordinateData[0].name;
      document.getElementById("conditionName").innerHTML =
        weatherData.current.weather[0].main;
      document.getElementById("mainTemperature").innerHTML = `${Math.round(
        weatherData.current.temp
      )}°`;
      document.getElementById("mainHigh").innerHTML = `H: ${Math.round(
        weatherData.daily[0].temp.max
      )}°`;
      document.getElementById("mainLow").innerHTML = `L: ${Math.round(
        weatherData.daily[0].temp.min
      )}°`;
      document.getElementById("description").innerHTML = `Today: ${
        weatherData.current.weather[0].main
      }. The high will be ${Math.round(
        weatherData.daily[0].temp.max
      )}° and the low will be ${Math.round(weatherData.daily[0].temp.min)}°`;

      for (let i = 0; i <= 47; i += 1) {
        document.getElementById(`time${i}`).innerHTML = `${format(
          new Date(fromUnixTime(weatherData.hourly[i].dt)),
          "MMM d, H:00"
        )}`;
        document.getElementById(
          `rain${i}`
        ).innerHTML = `Rain: ${convertToPercent(weatherData.hourly[i].pop)}%`;
        document.getElementById(
          `image${i}`
        ).src = `http://openweathermap.org/img/wn/${weatherData.hourly[i].weather[0].icon}@2x.png`;
        document.getElementById(`temp${i}`).innerHTML = `${Math.round(
          weatherData.hourly[i].temp
        )}°`;
      }
    }
  } catch (error) {
    alert(error);
  }
};

const submitQuery = () => {
  document.getElementById("searchButton").addEventListener("click", () => {
    if (tempSetting === 0) {
      const city = document.getElementById("textInput").value;
      fetchWeather(`${city}`);
    } else if (tempSetting === 1) {
      const city = document.getElementById("textInput").value;
      fetchCelsius(`${city}`);
    }
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

export { fetchWeather, submitQuery, convertTemperatures };
