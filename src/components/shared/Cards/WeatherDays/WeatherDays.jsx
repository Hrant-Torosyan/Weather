import { useDispatch, useSelector } from "react-redux";
import { calculateTemperature } from "../../../../util/CalcTemp";
import "./WeatherDays.scss";
import { setSelectedDay } from "../../../../redux/slices/weatherSlice";
const WeatherDays = ({ data }) => {
	const dispatch = useDispatch();
	const unit = useSelector((state) => state.weather.unit);
	const { selectedDay } = useSelector((state) => state.weather);
	return (
		<div className="weatherDays">
			{data.map((item, key) => (
				<div
					key={key}
					onClick={() => dispatch(setSelectedDay(item.date))}
					className={`weatherDaysItem ${item.date === selectedDay ? "active" : ""}`}
				>
					<p>{item.date}</p>
					<div className="weatherDaysItemImg">
						<h2>{calculateTemperature(item.temp, unit)}</h2>
						<img
							src={`http://openweathermap.org/img/wn/${item.icon}.png`}
							alt={item.description}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default WeatherDays;
