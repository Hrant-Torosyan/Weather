import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../../redux/slices/weatherSlice";
import Load from "../shared/Load/Load";

const LayoutRoot = ({ children }) => {
	const dispatch = useDispatch();
	const currentWeatherStatus = useSelector((state) => state.weather.status);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const { latitude, longitude } = position.coords;
				dispatch(
					getWeatherData({
						latitude: latitude,
						longitude: longitude,
						type: "LOCATION",
					})
				);
			});
		} else {
			console.log("Geolocation does not occur in this browser.");
		}
	}, []);

	useEffect(() => {
		if (currentWeatherStatus === "succeeded") {
			setIsLoaded(true);
		} else if (currentWeatherStatus === "failed") {
			setIsLoaded(true);
		}
	}, [currentWeatherStatus]);

	if (!isLoaded) {
		return <Load type={"mainLoader"} />;
	}

	return children;
};

export default LayoutRoot;
