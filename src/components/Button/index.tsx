import { Container } from "./style";

import { IButton } from "../../interfaces/Button";

function Button({
	background,
	children,
	hoverBackground = background,
	color = "white",
}: IButton) {
	return (
		<Container
			background={background}
			color={color}
			hoverBackground={hoverBackground}
		>
			{children}
		</Container>
	);
}

export default Button;
