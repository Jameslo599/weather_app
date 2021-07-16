const makeElement = ({
	type = "",
	id = "",
	className = "",
  } = {}) => {
	const element = document.createElement(type);
	element.setAttribute("id", id);
	element.setAttribute("class", className);
	return element;
  };
  
  export default makeElement