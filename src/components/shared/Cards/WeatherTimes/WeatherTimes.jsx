import { useSelector } from "react-redux";
import "./WeatherTimes.scss";
import { calculateTemperature } from "../../../../util/CalcTemp";

const WeatherTimes = ({ data }) => {
	const unit = useSelector((state) => state.weather.unit);

	const { selectedDay } = useSelector((state) => state.weather);
	const selected = data.find((item) => item.date === selectedDay);

	const times = selected ? selected.times : [];

	return (
		<div className="weatherTimes">
			{times.length > 0 ? (
				times.map((item, key) => (
					<div key={key} className="weatherTimesItem">
						<p>{calculateTemperature(item.temp, unit)}</p>
						<p>{item.temp}</p>
						<img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="" />
					</div>
				))
			) : (
				<p>No weather data available for this day.</p>
			)}
		</div>
	);
};

export default WeatherTimes;
