import { useSelector } from "react-redux";
import "./WeatherCard.scss";
import { calculateTemperature } from "../../../../util/CalcTemp";
const WeatherCard = ({ name, temp, icon, description }) => {
	const unit = useSelector((state) => state.weather.unit);

	return (
		<div className="weatherCard">
			<h2>{name}</h2>
			<p>{calculateTemperature(temp, unit)}</p>
			<img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
			<p>{description}</p>
		</div>
	);
};

export default WeatherCard;
