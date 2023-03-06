import { Container } from "./style";

import { IButton } from "../../interfaces/Button";

function Button({
	background,
	children,
	hoverBackground = background,
	color = "white",
	clickFunction,
}: IButton) {
	return (
		<Container
			onClick={() => clickFunction && clickFunction()}
			background={background}
			color={color}
			hoverBackground={hoverBackground}
		>
			{children}
		</Container>
	);
}

export default Button;
