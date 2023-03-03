import { Container } from "./style";

import { IInput } from "../../interfaces/Input";

function Input({ label, placeholder }: IInput) {
	return (
		<Container>
			<label>{label}</label>
			<input type="text" placeholder={placeholder} />
		</Container>
	);
}

export default Input;
