import { makeElement, elementMethods } from "./make-elements";

// Generates all of the elements to hold weather info
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

  const weeklyDisplay = makeElement({
    type: "div",
    id: "weeklyDisplay",
    className: "",
  });
  for (let i = 0; i <= 7; i += 1) {
    const weekHolder = makeElement({
      type: "div",
      id: `weekHolder${i}`,
      className: "weekHold",
    });
    weeklyDisplay.appendChild(weekHolder);

    const weekDay = makeElement({
      type: "h2",
      id: `weekDay${i}`,
      className: "week",
    });
    weekHolder.appendChild(weekDay);

    const weekImage = makeElement({
      type: "img",
      id: `weekImage${i}`,
      className: "week",
    });
    weekHolder.appendChild(weekImage);

    const weekRain = makeElement({
      type: "h2",
      id: `weekRain${i}`,
      className: "week",
    });
    weekHolder.appendChild(weekRain);

    const weekHumid = makeElement({
      type: "h2",
      id: `weekHumid${i}`,
      className: "week",
    });
    weekHolder.appendChild(weekHumid);

    const weekTemp = makeElement({
      type: "div",
      id: `weekTemp${i}`,
      className: "weekTemp",
    });
    weekHolder.appendChild(weekTemp);

    const weekHigh = makeElement({
      type: "h2",
      id: `weekHigh${i}`,
      className: "week",
    });
    weekTemp.appendChild(weekHigh);

    const weekLow = makeElement({
      type: "h2",
      id: `weekLow${i}`,
      className: "week",
    });
    weekTemp.appendChild(weekLow);
  }
  const divArray = [
    cityDisplay,
    forecastDisplay,
    descriptionDisplay,
    dataDisplay,
    weeklyDisplay,
  ];
  divArray.forEach((element) => {
    elementMethods(element).appendToBody("grid");
  });
  cityArray.forEach((element) => {
    elementMethods(element).appendToBody("cityDiv");
  });
};

// Animation while content is being loaded
const loadAnimation = () => {
  const spinnerWrapper = document.querySelector(".spinner-wrapper");
  window.addEventListener("load", () => {
    setTimeout(() => {
      spinnerWrapper.remove();
    }, 500);
  });
};
export { generateMainDisplay, loadAnimation };
