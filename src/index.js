import "core-js/core";
import "regenerator-runtime/runtime";
import generateMainDisplay from "./body-elements";
import { makeNavbar } from "./navbar";
import { fetchWeather, submitQuery, convertTemperatures } from "./open-weather";

(function () {
  makeNavbar();
  generateMainDisplay();
  fetchWeather("Houston");
  submitQuery();
  convertTemperatures();
})();
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
