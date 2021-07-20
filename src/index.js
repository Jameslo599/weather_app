import "core-js/core";
import "regenerator-runtime/runtime";
import { generateMainDisplay, loadAnimation } from "./body-elements";
import { makeNavbar } from "./navbar";
import { fetchWeather, submitQuery, convertTemperatures } from "./open-weather";
import makeCopyright from "./copyrightbar";

// Generates full weather app
(function makePage() {
  makeNavbar();
  loadAnimation();
  generateMainDisplay();
  fetchWeather("Houston");
  submitQuery();
  convertTemperatures();
  makeCopyright();

  document.querySelector("#dataType0").innerHTML = "Sunrise";
  document.querySelector("#dataType1").innerHTML = "Sunset";
  document.querySelector("#dataType2").innerHTML = "Chance of Rain";
  document.querySelector("#dataType3").innerHTML = "Humidity";
  document.querySelector("#dataType4").innerHTML = "Wind";
  document.querySelector("#dataType5").innerHTML = "Feels Like";
  document.querySelector("#dataType6").innerHTML = "Precipitation";
  document.querySelector("#dataType7").innerHTML = "Pressure";
  document.querySelector("#dataType8").innerHTML = "Visibility";
  document.querySelector("#dataType9").innerHTML = "UV Index";

  document.getElementById("weekDay0").innerHTML = "Day";
  document.getElementById("weekImage0").src =
    "http://openweathermap.org/img/wn/03d@2x.png";
  document.getElementById("weekRain0").innerHTML = "Chance of Rain";
  document.getElementById("weekHumid0").innerHTML = "Humidity";
  document.getElementById("weekHigh0").innerHTML = "High";
  document.getElementById("weekLow0").innerHTML = "Low";
})();
