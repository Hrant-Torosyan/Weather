import style from "./Input.module.scss";

const Input = ({
	disabled = false,
	inpVal,
	setInpVal,
	error,
	setError,
	type,
	placeholder,
	classNames = "",

}) => {

	const handleChange = (e) => {
		setError(null);
		if (disabled) {
			return;
		}
		if (type === "text" && e.target.value.length > 45) {
			return;
		}
		setInpVal(e.target.value);
	};

	return (
		<div
			className={`${style.inputStyle} ${classNames}`}
		>



			<div className={style.inputBox}>
				<input
					className={
						error
							? style.inpError
							: ""
					}
					value={
						inpVal
					}
					disabled={disabled}
					placeholder={placeholder}
					type={
						type
					}
					onChange={handleChange}
					spellCheck="false"
					aria-autocomplete="none"
					autoComplete="off"
				/>


			</div>
		</div>
	);
};

export default Input;
