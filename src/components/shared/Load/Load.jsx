import "./Load.scss";
const Load = ({ type }) => {
	if (type === "mainLoader") {
		return (
			<div id="mainLoader">
				<img
					src="https://cdn.dribbble.com/users/702004/screenshots/2834791/material-loader.gif"
					alt="PreLoader"
				/>
			</div>
		);
	} else if (type === "moduleLoader") {
		return (
			<div id="moduleLoader">
				<img
					src="https://cdn.dribbble.com/users/702004/screenshots/2834791/material-loader.gif"
					alt="PreLoader"
				/>
			</div>
		);
	}
};

export default Load;
