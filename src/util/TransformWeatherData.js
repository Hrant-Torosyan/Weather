export const TransformWeatherData = (data) => {
	const dailyWeather = {};

	data.forEach((entry) => {
		const [date, time] = entry.dt_txt.split(" ");

		if (!dailyWeather[date]) {
			dailyWeather[date] = {
				date: date,
				times: [],
				temp: entry.main.temp,
				icon: entry.weather[0].icon,
				description: entry.weather[0].description,
				wind: entry.wind.speed,
				humidity: entry.main.humidity,
			};
		}

		dailyWeather[date].times.push({
			time: time,
			temp: entry.main.temp,
			icon: entry.weather[0].icon,
		});
	});

	return Object.values(dailyWeather);
};
