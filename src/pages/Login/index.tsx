import { Container, LoginForm } from "./style";

// assets
import logo from "../../assets/logo.svg";

// components
import Input from "../../components/Input";
import Button from "../../components/Button";

function Login() {
	return (
		<Container>
			<img src={logo} alt="logo" />
			<LoginForm>
				<h2>Login</h2>
				<Input label="Email" placeholder="Digite seu email aqui" />
				<Input label="Senha" placeholder="Digite sua senha aqui" />
				<Button backgroung="black">Entrar</Button>
			</LoginForm>
		</Container>
	);
}

export default Login;
