import { makeElement } from "./make-elements";

const content = document.getElementById("content");

// Generates complete navbar
const makeNavbar = () => {
  const navBar = makeElement({ type: "ul", id: "navbar", className: "navbar" });
  content.appendChild(navBar);

  const navLogo = makeElement({
    type: "i",
    id: "navLogo",
    className: "fad fa-sun-haze fa-swap-opacity",
  });
  navLogo.style =
    "--fa-primary-color: #046582; --fa-secondary-color: #CD113B; --fa-secondary-opacity: 1";
  navBar.appendChild(navLogo);

  const navTitle = makeElement({ type: "li", id: "nav", className: "nav" });
  navTitle.innerHTML = "Weather";
  navBar.appendChild(navTitle);

  const searchContainer = makeElement({
    type: "div",
    id: "searchHolder",
    className: "",
  });
  navBar.appendChild(searchContainer);

  const searchBar = makeElement({
    type: "input",
    id: "textInput",
    className: "bar",
  });
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("placeholder", "Enter City Name");
  searchContainer.appendChild(searchBar);

  const searchButton = makeElement({
    type: "button",
    id: "searchButton",
    className: "bar",
  });
  searchButton.innerHTML = "Search";
  searchContainer.appendChild(searchButton);

  const convertButton = makeElement({
    type: "button",
    id: "convertButton",
    className: "",
  });
  convertButton.innerHTML = `°C / <b>°F</b>`;
  searchContainer.appendChild(searchButton);
  searchContainer.appendChild(convertButton);
};

export { makeNavbar, content };
