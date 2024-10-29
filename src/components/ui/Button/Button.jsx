import { NavLink } from "react-router-dom";
import style from "./Button.module.scss";
const Button = ({
	title,
	disabled = false,
	onClick = null,
	type = "submit",
	classNames = "",
}) => {
	const handleClick = () => {
		if (onClick && !disabled) onClick();
	};
	return (
		<div
			{...(!disabled && onClick ? { onClick: handleClick } : {})}
			className={`${style.buttonStyle}   ${disabled ? style.dis : ""} ${classNames}`}
		>
			<button type={type} disabled={disabled}>
				{title}
			</button>
		</div>
	);
};

export default Button;
