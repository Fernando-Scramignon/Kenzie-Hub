import { Container } from "./style";

import { IButton } from "../../interfaces/Button";

function Button({ backgroung, children, color = "white" }: IButton) {
	return <Container>{children}</Container>;
}

export default Button;
