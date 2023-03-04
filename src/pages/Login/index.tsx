import { Container, LoginForm, RegisterSection } from "./style";

// assets
import logo from "../../assets/logo.svg";

// components
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Colors } from "../../utils";

function Login() {
	return (
		<Container>
			<img src={logo} alt="logo" />
			<LoginForm>
				<h2>Login</h2>
				<Input label="Email" placeholder="Digite seu email aqui" />
				<Input label="Senha" placeholder="Digite sua senha aqui" />
				<Button
					background={Colors.colorPrimary}
					hoverBackground={Colors.colorPrimary50}
					color={Colors.white}
				>
					Entrar
				</Button>
				<RegisterSection>
					<span>Ainda não possuí uma conta?</span>
					<Button
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
