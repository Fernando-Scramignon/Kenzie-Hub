import { Container } from "./style";

import Button from "../Button";

import logo from "../../assets/logo.svg";
import { Colors } from "../../utils";

function Header() {
    return (
        <Container>
            <img id="home-logo" src={logo} alt="kenzie hub logo" />
            <Button
                id="home-logout"
                background={Colors.grey3}
                hoverBackground={Colors.grey2}
                color={Colors.grey0}
            >
                Sair
            </Button>
        </Container>
    );
}

export default Header;
