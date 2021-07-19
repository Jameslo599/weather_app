const makeElement = ({ type = "", id = "", className = "" } = {}) => {
  const element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", className);
  return element;
};

const elementMethods = (element) => {
  const appendToBody = (destination) =>
    document.getElementById(destination).appendChild(element);
  return { appendToBody };
};

export { makeElement, elementMethods };
