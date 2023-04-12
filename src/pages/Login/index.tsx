import { Container, LoginForm, RegisterSection } from "./style";

import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router-dom";

// assets
import logo from "../../assets/logo.svg";

// components
import Input from "../../components/Input";
import Button from "../../components/Button";

import { AxiosRequest } from "../../classes/axios";
import { Colors } from "../../utils";

function Login() {
    const navigate: NavigateFunction = useNavigate();

    function navigateToRegisterPage() {
        navigate("/register");
    }

    const loginData = {
        email: "scramignonnarde@gmail.com",
        password: "1234",
    };

    return (
        <Container>
            <img src={logo} alt="logo" />
            <LoginForm onClick={(e) => console.log("Login goes here")}>
                <h2>Login</h2>
                <Input
                    name="email"
                    label="Email"
                    placeholder="Digite seu email aqui"
                />
                <Input
                    name="password"
                    label="Senha"
                    placeholder="Digite sua senha aqui"
                    type="password"
                />
                <Button
                    background={Colors.colorPrimary}
                    hoverBackground={Colors.colorPrimary50}
                    color={Colors.white}
                >
                    Entrar
                </Button>
                <RegisterSection>
                    <span onClick={navigateToRegisterPage}>
                        Ainda não possuí uma conta?
                    </span>
                    <Button
                        clickFunction={navigateToRegisterPage}
                        background={Colors.grey1}
                        hoverBackground={Colors.grey2}
                        color={Colors.white}
                    >
                        Cadastre-se
                    </Button>
                </RegisterSection>
            </LoginForm>
        </Container>
    );
}

export default Login;
