import "./Checkbox.scss";

import { useSelector } from "react-redux";

export const Checkbox = ({ onClick }) => {
	const unit = useSelector((state) => state.weather.unit);

	return (
		<div className="checkbox">
			<p
				onClick={() => onClick()}
				className={`checkboxItem ${unit === "metric" ? "active" : ""}`}
			>
				°C
			</p>
			<p
				onClick={() => onClick()}
				className={`checkboxItem ${unit === "imperial" ? "active" : ""}`}
			>
				°F
			</p>
		</div>
	);
};
