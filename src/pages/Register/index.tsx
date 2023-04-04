import {
    Container,
    RegisterHeader,
    RegisterForm,
    FormTitleDiv,
    FormInputDiv,
} from "./style";

import { NavigateFunction, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "../../assets/logo.svg";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { userSchema } from "../../schemas";

import { AxiosRequest } from "../../classes/axios";
import { courseModuleTypes } from "../../interfaces/Login";
import { Colors } from "../../utils";

const moduleOptions = [
    "Primeiro módulo",
    "Segundo módulo",
    "Terceiro módulo",
    "Quarto módulo",
];

function Register() {
    const navigate: NavigateFunction = useNavigate();
    function navigatetoLogin(): void {
        navigate("/");
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    function onSubmitFunction(data: any): void {
        console.log(data);
    }

    return (
        <Container>
            <RegisterHeader>
                <img src={logo} alt="logo" onClick={navigatetoLogin} />
                <Button
                    clickFunction={navigatetoLogin}
                    color={Colors.grey0}
                    background={Colors.grey3}
                    hoverBackground={Colors.grey2}
                >
                    Voltar
                </Button>
            </RegisterHeader>
            <RegisterForm onSubmit={handleSubmit(onSubmitFunction)}>
                <FormTitleDiv>
                    <h2>Crie sua conta</h2>
                    <p>Rapido e grátis, vamos nessa</p>
                </FormTitleDiv>
                <FormInputDiv>
                    <Input
                        name="name"
                        label="Nome"
                        placeholder="Digite aqui seu nome"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        name="email"
                        label="Email"
                        placeholder="Digite aqui seu email"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        name="password"
                        label="Senha"
                        placeholder="Digite aqui sua senha"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        name="passwordMatch"
                        label="Confirmar senha"
                        placeholder="Digite sua senha novamente"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        name="bio"
                        label="Bio"
                        placeholder="Fale sobre você"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        name="contact"
                        label="Contato"
                        placeholder="Opção de contato"
                        register={register}
                        errors={errors}
                    />
                    <Select
                        name="modules-select"
                        label="Selecionar módulo"
                        options={moduleOptions}
                    />
                    <Button
                        background={Colors.colorPrimaryDisable}
                        hoverBackground={Colors.colorPrimary}
                        color="white"
                    >
                        Cadastrar
                    </Button>
                </FormInputDiv>
            </RegisterForm>
        </Container>
    );
}

export default Register;

export { moduleOptions };
