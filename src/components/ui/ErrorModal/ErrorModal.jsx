import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeErrorModal } from "../../../redux/slices/weatherSlice";
import "./ErrorModal.scss";
const ErrorModal = ({ title }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(closeErrorModal());
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return <div className="errorModal">{title}</div>;
};

export default ErrorModal;
