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
  navLogo.style = "--fa-primary-color: #046582; --fa-secondary-color: #CD113B; --fa-secondary-opacity: 1";
  navBar.appendChild(navLogo);

  const navItems = makeElement({ type: "li", id: "nav", className: "nav" });
  navItems.innerHTML = "Weather";
  navBar.appendChild(navItems);

  const taskLink = makeElement({ type: "a", href: "#" });
  navBar.appendChild(taskLink);
};

export { makeNavbar, content };
