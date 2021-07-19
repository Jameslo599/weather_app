import { makeElement, elementMethods } from "./make-elements";

const generateMainDisplay = () => {
  const cityDisplay = makeElement({
    type: "div",
    id: "cityDiv",
    className: "main",
  });
  const city = makeElement({ type: "h1", id: "cityName", className: "city" });
  cityDisplay.appendChild(city);
  const condition = makeElement({
    type: "h1",
    id: "conditionName",
    className: "city",
  });
  const temperature = makeElement({
    type: "h1",
    id: "mainTemperature",
    className: "city",
  });
  const minMaxHolder = makeElement({
    type: "div",
    id: "minMaxHolder",
    className: "city",
  });
  const highTemp = makeElement({
    type: "h2",
    id: "mainHigh",
    className: "minMax",
  });
  minMaxHolder.appendChild(highTemp);
  const lowTemp = makeElement({
    type: "h2",
    id: "mainLow",
    className: "minMax",
  });
  minMaxHolder.appendChild(lowTemp);
  const cityArray = [city, condition, temperature, minMaxHolder];

  const forecastDisplay = makeElement({
    type: "div",
    id: "forecastDiv",
    className: "main",
  });
  const forecastHolder = makeElement({
    type: "div",
    id: "forecastHolder",
    className: "",
  });
  forecastDisplay.appendChild(forecastHolder);
  for (let i = 0; i <= 31; i += 1) {
    const forecast = makeElement({
      type: "div",
      id: `forecast${i}`,
      className: "forecast",
    });
    forecastHolder.appendChild(forecast);

    const time = makeElement({
      type: "p",
      id: `time${i}`,
      className: "time",
    });
    forecast.appendChild(time);
    time.innerHTML = "james";

    const rain = makeElement({
      type: "p",
      id: `rain${i}`,
      className: "rain",
    });
    forecast.appendChild(rain);
    rain.innerHTML = "james";

    const image = makeElement({
      type: "img",
      id: `image${i}`,
      className: "image",
    });
    forecast.appendChild(image);

    const temp = makeElement({
      type: "p",
      id: `temp${i}`,
      className: "temp",
    });
    forecast.appendChild(temp);
    temp.innerHTML = "james";
  }
  const descriptionDisplay = makeElement({
    type: "div",
    id: "descriptionDiv",
    className: "description",
  });
  const description = makeElement({
    type: "h2",
    id: "description",
    className: "",
  });
  descriptionDisplay.appendChild(description);
  const divArray = [cityDisplay, forecastDisplay, descriptionDisplay];
  divArray.forEach((element) => {
    elementMethods(element).appendToBody("grid");
  });
  cityArray.forEach((element) => {
    elementMethods(element).appendToBody("cityDiv");
  });
};

export default generateMainDisplay;
