import { useEffect, useState } from "react";
import Input from "../../ui/Input/Input";
import "./Navigation.scss";
import Button from "../../ui/Button/Button";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
	getWeatherData,
	getWeatherDataSucceeded,
	openErrorModal,
	toggleUnit,
} from "../../../redux/slices/weatherSlice";
import ErrorModal from "../../ui/ErrorModal/ErrorModal";

const Navigation = () => {
	const errorModal = useSelector((state) => state.weather.errorModal);
	const dispatch = useDispatch();
	const { status, error } = useSelector((state) => state.weather);
	const [city, setCity] = useState("");

	const [valError, setValError] = useState("");

	const handleSearch = () => {
		dispatch(getWeatherData({ city: city }));
	};
	useEffect(() => {
		if (status === "succeeded") {
			setCity("");
			dispatch(getWeatherDataSucceeded());
		} else if (status === "failed") {
			setCity("");
			dispatch(getWeatherDataSucceeded());
			dispatch(openErrorModal());
		}
	}, [status, dispatch]);
	console.log(errorModal);
	return (
		<header>
			{errorModal === "open" && <ErrorModal title={error?.message} />}
			<div className="control">
				<Checkbox onClick={() => dispatch(toggleUnit())} />
			</div>
			<div className="headerSearch">
				<Input
					inpVal={city}
					setInpVal={setCity}
					error={valError}
					setError={setValError}
					type={"text"}
					placeholder={"Search"}
				/>
				<Button
					disabled={!city.trim() || status === "pending"}
					onClick={handleSearch}
					title={"Search"}
				/>
			</div>
		</header>
	);
};

export default Navigation;
