export const calculateTemperature = (temp, unit) => {
	let convertedTemp;
	if (unit === "metric") {
		convertedTemp = Math.round(temp - 273.15); // Celsius
	} else {
		convertedTemp = Math.round(((temp - 273.15) * 9) / 5 + 32); // Fahrenheit
	}

	return `${convertedTemp} °${unit === "metric" ? "C" : "F"}`;
};
