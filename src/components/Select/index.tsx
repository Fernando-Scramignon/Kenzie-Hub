import { Container } from "./style";

import { ISelect } from "../../interfaces/Select";

function Select({ label, name, options }: ISelect) {
	return (
		<Container>
			<label htmlFor={name}>{label}</label>
			<select name={name} id={name}>
				{options?.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</Container>
	);
}

export default Select;
