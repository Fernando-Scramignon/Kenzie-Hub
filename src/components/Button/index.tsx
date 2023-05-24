import { Container } from "./style";

import { IButton } from "../../interfaces/Button";

function Button({
    background,
    children,
    hoverBackground = background,
    color = "white",
    id,
    clickFunction,
    type = "submit",
}: IButton) {
    return (
        <Container
            onClick={() => clickFunction && clickFunction()}
            background={background}
            color={color}
            hoverBackground={hoverBackground}
            id={id}
            type={type}
        >
            {children}
        </Container>
    );
}

export default Button;
