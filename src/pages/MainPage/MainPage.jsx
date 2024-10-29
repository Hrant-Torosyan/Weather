import { useSelector } from "react-redux";
import WeatherCard from "../../components/shared/Cards/WeatherCard/WeatherCard";
import "./MainPage.scss";
import WeatherTimes from "../../components/shared/Cards/WeatherTimes/WeatherTimes";
import WeatherDays from "../../components/shared/Cards/WeatherDays/WeatherDays";

export const MainPage = () => {
	const { currentWeather, listOfWeather } = useSelector((state) => state.weather);

	return (
		<div className="mainPage">
			<div className="mainPageContent">
				<WeatherCard
					name={currentWeather.name}
					temp={currentWeather.main.temp}
					icon={currentWeather.weather[0].icon}
					description={currentWeather.weather[0].description}
				/>
				<WeatherTimes data={listOfWeather} />
			</div>
			<WeatherDays data={listOfWeather} />
		</div>
	);
};
