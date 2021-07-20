import { format, fromUnixTime } from "date-fns";

// 0 = Fahrenheit, 1 = Celsius
let tempSetting = 0;
// Holds current weather condition for description
const conditionArray = [];
// Removes all non-numeric values
const stripValues = (string) => string.replace(/\D/g, "");

const convertToPercent = (decimal) => Math.round(decimal * 100);
// Converts wind angle to a cardinal direction
const degreeToCompass = (num) => {
  const value = Math.round(num / 22.5 + 0.5);
  const directionArray = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return directionArray[value % 16];
};

const hectoPascalToMM = (num) => Math.round(num * 0.75006);
const hectoPascalToInches = (num) => Math.round(num * 0.02953);

const metersToMiles = (num) => Math.round(num * 0.000621);

const mmToInches = (num) => Math.round(num / 25.4);

// Returns forecast in Fahrenheit
const fetchWeather = async (query) => {
  try {
    const coordinates = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    const coordinateData = await coordinates.json();
    console.log(coordinateData);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateData[0].lat}&lon=${coordinateData[0].lon}&units=imperial&exclude=alerts&appid=7f7370a963b4d73985e031d0d1b9738f`,
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
          "MMM d, h a"
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

      document.getElementById("data0").innerHTML = `${format(
        new Date(fromUnixTime(weatherData.current.sunrise)),
        "h:mm a"
      )}`;
      document.getElementById("data1").innerHTML = `${format(
        new Date(fromUnixTime(weatherData.current.sunset)),
        "h:mm a"
      )}`;
      document.getElementById("data2").innerHTML = `${convertToPercent(
        weatherData.hourly[0].pop
      )}%`;
      document.getElementById(
        "data3"
      ).innerHTML = `${weatherData.current.humidity}%`;
      document.getElementById("data4").innerHTML = `${degreeToCompass(
        weatherData.current.wind_deg
      )} ${Math.round(weatherData.current.wind_speed)} mph`;
      document.getElementById("data5").innerHTML = `${Math.round(
        weatherData.current.feels_like
      )}°`;
      document.getElementById("data6").innerHTML = `${mmToInches(
        weatherData.minutely[0].precipitation
      )} in`;
      document.getElementById("data7").innerHTML = `${hectoPascalToInches(
        weatherData.current.pressure
      )} inHg`;
      document.getElementById("data8").innerHTML = `${metersToMiles(
        weatherData.current.visibility
      )} mi`;
      document.getElementById("data9").innerHTML = `${weatherData.current.uvi}`;

      for (let i = 1; i <= 7; i += 1) {
        document.getElementById(`weekDay${i}`).innerHTML = `${format(
          new Date(fromUnixTime(weatherData.daily[i].dt)),
          "eeee"
        )}`;
        document.getElementById(
          `weekImage${i}`
        ).src = `http://openweathermap.org/img/wn/${weatherData.daily[i].weather[0].icon}@2x.png`;
        document.getElementById(`weekRain${i}`).innerHTML = `${convertToPercent(
          weatherData.daily[i].pop
        )}%`;
        document.getElementById(
          `weekHumid${i}`
        ).innerHTML = `${weatherData.daily[i].humidity}%`;
        document.getElementById(`weekHigh${i}`).innerHTML = `${Math.round(
          weatherData.daily[i].temp.max
        )}°`;
        document.getElementById(`weekLow${i}`).innerHTML = `${Math.round(
          weatherData.daily[i].temp.min
        )}°`;
      }
    }
  } catch (error) {
    alert(error);
  }
};

// Returns forecast in Celsius
const fetchCelsius = async (query) => {
  try {
    const coordinates = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=7f7370a963b4d73985e031d0d1b9738f`,
      { mode: "cors" }
    );
    const coordinateData = await coordinates.json();
    console.log(coordinateData);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateData[0].lat}&lon=${coordinateData[0].lon}&units=metric&exclude=alerts&appid=7f7370a963b4d73985e031d0d1b9738f`,
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
          "MMM d, h a"
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

      document.getElementById("data0").innerHTML = `${format(
        new Date(fromUnixTime(weatherData.current.sunrise)),
        "h:mm a"
      )}`;
      document.getElementById("data1").innerHTML = `${format(
        new Date(fromUnixTime(weatherData.current.sunset)),
        "h:mm a"
      )}`;
      document.getElementById("data2").innerHTML = `${convertToPercent(
        weatherData.hourly[0].pop
      )}%`;
      document.getElementById(
        "data3"
      ).innerHTML = `${weatherData.current.humidity}%`;
      document.getElementById("data4").innerHTML = `${degreeToCompass(
        weatherData.current.wind_deg
      )} ${Math.round(weatherData.current.wind_speed)} m/s`;
      document.getElementById("data5").innerHTML = `${Math.round(
        weatherData.current.feels_like
      )}°`;
      document.getElementById(
        "data6"
      ).innerHTML = `${weatherData.minutely[0].precipitation} mm`;
      document.getElementById("data7").innerHTML = `${hectoPascalToMM(
        weatherData.current.pressure
      )} mmHg`;
      document.getElementById("data8").innerHTML = `${
        weatherData.current.visibility / 1000
      } km`;
      document.getElementById("data9").innerHTML = `${weatherData.current.uvi}`;

      for (let i = 1; i <= 7; i += 1) {
        document.getElementById(`weekDay${i}`).innerHTML = `${format(
          new Date(fromUnixTime(weatherData.daily[i].dt)),
          "eeee"
        )}`;
        document.getElementById(
          `weekImage${i}`
        ).src = `http://openweathermap.org/img/wn/${weatherData.daily[i].weather[0].icon}@2x.png`;
        document.getElementById(`weekRain${i}`).innerHTML = `${convertToPercent(
          weatherData.daily[i].pop
        )}%`;
        document.getElementById(
          `weekHumid${i}`
        ).innerHTML = `${weatherData.daily[i].humidity}%`;
        document.getElementById(`weekHigh${i}`).innerHTML = `${Math.round(
          weatherData.daily[i].temp.max
        )}°`;
        document.getElementById(`weekLow${i}`).innerHTML = `${Math.round(
          weatherData.daily[i].temp.min
        )}°`;
      }
    }
  } catch (error) {
    alert(error);
  }
};

// Fetches new forecast which search button is clicked. Can also use Enter key for this.
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

// Converts temp from Fahrenheit to Celsius or vice-versa when button is clicked.
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
      document.getElementById(
        "data5"
      ).innerHTML = `${convertFahrenheitToCelsius(
        stripValues(document.getElementById(`data5`).innerHTML)
      )}°`;

      for (let i = 1; i <= 7; i += 1) {
        document.getElementById(
          `weekHigh${i}`
        ).innerHTML = `${convertFahrenheitToCelsius(
          stripValues(document.getElementById(`weekHigh${i}`).innerHTML)
        )}°`;
      }

      for (let i = 1; i <= 7; i += 1) {
        document.getElementById(
          `weekLow${i}`
        ).innerHTML = `${convertFahrenheitToCelsius(
          stripValues(document.getElementById(`weekLow${i}`).innerHTML)
        )}°`;
      }

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
      document.getElementById(
        "data5"
      ).innerHTML = `${convertCelsiusToFahrenheit(
        stripValues(document.getElementById(`data5`).innerHTML)
      )}°`;

      for (let i = 1; i <= 7; i += 1) {
        document.getElementById(
          `weekHigh${i}`
        ).innerHTML = `${convertCelsiusToFahrenheit(
          stripValues(document.getElementById(`weekHigh${i}`).innerHTML)
        )}°`;
      }

      for (let i = 1; i <= 7; i += 1) {
        document.getElementById(
          `weekLow${i}`
        ).innerHTML = `${convertCelsiusToFahrenheit(
          stripValues(document.getElementById(`weekLow${i}`).innerHTML)
        )}°`;
      }

      document.getElementById("convertButton").innerHTML = `°C / <b>°F</b>`;
      tempSetting = 0;
    }
  });
};

export { fetchWeather, submitQuery, convertTemperatures };
