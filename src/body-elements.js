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
  for (let i = 0; i <= 47; i += 1) {
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

    const rain = makeElement({
      type: "p",
      id: `rain${i}`,
      className: "rain",
    });
    forecast.appendChild(rain);

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

  const dataDisplay = makeElement({
    type: "div",
    id: "dataDisplay",
    className: "",
  });

  for (let i = 0; i <= 9; i += 1) {
    const dataHolder = makeElement({
      type: "div",
      id: `dataHolder${i}`,
      className: "",
    });
    dataDisplay.appendChild(dataHolder);

    const dataType = makeElement({
      type: "h2",
      id: `dataType${i}`,
      className: "dataType",
    });
    dataHolder.appendChild(dataType);

    const data = makeElement({
      type: "h2",
      id: `data${i}`,
      className: "data",
    });
    dataHolder.appendChild(data);
  }

  const divArray = [
    cityDisplay,
    forecastDisplay,
    descriptionDisplay,
    dataDisplay,
  ];
  divArray.forEach((element) => {
    elementMethods(element).appendToBody("grid");
  });
  cityArray.forEach((element) => {
    elementMethods(element).appendToBody("cityDiv");
  });
};

export default generateMainDisplay;
