import { Container } from "./style";

import { IButton } from "../../interfaces/Button";

function Button({ background, children, color = "white" }: IButton) {
	return (
		<Container background={background} color={color}>
			{children}
		</Container>
	);
}

export default Button;
