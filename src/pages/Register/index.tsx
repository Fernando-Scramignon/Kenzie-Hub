import {
	Container,
	RegisterHeader,
	RegisterForm,
	FormTitleDiv,
	FormInputDiv,
} from "./style";

import { NavigateFunction, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { Colors } from "../../utils";

function Register() {
	const navigate: NavigateFunction = useNavigate();
	function navigatetoLogin(): void {
		navigate("/");
	}
	const moduleOptions = [
		"Primeiro módulo",
		"Segundo módulo",
		"Terceiro módulo",
		"Quarto módulo",
		"Quinto módulo",
		"Sexto módulo",
	];

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
			<RegisterForm>
				<FormTitleDiv>
					<h2>Crie sua conta</h2>
					<p>Rapido e grátis, vamos nessa</p>
				</FormTitleDiv>
				<FormInputDiv>
					<Input label="Nome" placeholder="Digite aqui seu nome" />
					<Input label="Email" placeholder="Digite aqui seu email" />
					<Input
						label="Senha"
						placeholder="Digite aqui sua senha"
						type="password"
					/>
					<Input
						label="Confirmar senha"
						placeholder="Digite sua senha novamente"
						type="password"
					/>
					<Input label="Bio" placeholder="Fale sobre você" />
					<Input label="Contato" placeholder="Opção de contato" />
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
