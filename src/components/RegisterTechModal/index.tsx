import { Container } from "./style";
import Input from "../Input";

function RegisterTechModal() {
    return (
        <Container>
            <div className="register-tech-header">
                <p>Cadastrar Tecnologia</p>
                <span>X</span>
            </div>
            <div className="register-tech-body">
                <Input
                    label="Nome"
                    name="tech"
                    placeholder="Nome da tecnologia"
                />
            </div>
        </Container>
    );
}

export default RegisterTechModal;
