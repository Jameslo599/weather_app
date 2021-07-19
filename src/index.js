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
