import { Container, LoginForm, RegisterSection } from "./style";

import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router-dom";

// validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../../schemas";

// assets
import logo from "../../assets/logo.svg";

// components
import Input from "../../components/Input";
import Button from "../../components/Button";

// interfaces
import { ILogin } from "../../interfaces/Login";

import { AxiosRequest } from "../../classes/axios";
import { Colors } from "../../utils";

function Login() {
    const navigate: NavigateFunction = useNavigate();

    function navigateToRegisterPage() {
        navigate("/register");
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({
        resolver: yupResolver(userLoginSchema),
    });

    async function onSubmitFunction(data: ILogin): Promise<void> {
        const { email, password } = data;
        const res: any = await AxiosRequest.loginRequest(email, password);

        console.log(res);
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <LoginForm onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>Login</h2>
                <Input
                    name="email"
                    label="Email"
                    placeholder="Digite seu email aqui"
                    register={register}
                    errors={errors}
                />
                <Input
                    name="password"
                    label="Senha"
                    placeholder="Digite sua senha aqui"
                    type="password"
                    register={register}
                    errors={errors}
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
