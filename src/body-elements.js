import { makeElement, elementMethods} from "./make-elements";

const generateMainDisplay = () => {
	const cityDisplay = makeElement({type: 'div', id: 'cityDiv', className: 'main'});
		const city = makeElement({type: 'h1', id: 'cityName', className: ''});
		city.innerHTML = 'Dallas'
		cityDisplay.appendChild(city);
		const condition = makeElement({type: 'h2', id: 'conditionName', className: ''})
		condition.innerHTML = 'Clear'
		const temperature = makeElement({type: 'h1', id: 'mainTemperature', className: ''})
		temperature.innerHTML = '100 F'
		const minMaxHolder = makeElement({type: 'div', id: 'minMaxHolder', className: ''})
		const highTemp = makeElement({type: 'h2', id: 'mainHigh', className: 'minMax'})
		highTemp.innerHTML = 'H: 105F'
		minMaxHolder.appendChild(highTemp)
		const lowTemp = makeElement({type: 'h2', id: 'mainLow', className: 'minMax'})
		lowTemp.innerHTML = 'L: 85F'
		minMaxHolder.appendChild(lowTemp)
		const cityArray = [city, condition, temperature, minMaxHolder];
		
		

	const forecastDisplay = makeElement({type: 'div', id: 'forecastDiv', className: 'main'});
		const forecastHolder = makeElement({type: 'div', id: 'forecastHolder', className: ''})
		forecastDisplay.appendChild(forecastHolder);
		for (let i = 0; i<=30; i += 1) {
			const forecast = makeElement({type: 'p', id: `forecast${i}`, className: 'forecast'});
			forecastHolder.appendChild(forecast);
			forecast.innerHTML = 'james'
		}
	const descriptionDisplay = makeElement({type: 'div', id: 'descriptionDiv', className: 'description'});
		const description = makeElement({type: 'h2', id: 'description', className: ''});
		description.innerHTML = 'Today'
		descriptionDisplay.appendChild(description);
	const divArray = [cityDisplay, forecastDisplay, descriptionDisplay];
	divArray.forEach(element => {
		elementMethods(element).appendToBody('grid')
	});
	cityArray.forEach(element => {
		elementMethods(element).appendToBody('cityDiv')
	});
};

export default generateMainDisplay;