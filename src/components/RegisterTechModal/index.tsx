import { Container, Backdrop } from "./style";
import Input from "../Input";
import { CSSTransition } from "react-transition-group";
import { IRegisterTechModal } from "../../interfaces/Tech";

function RegisterTechModal({
    showTechCreation,
    alternateTechCreation,
}: IRegisterTechModal) {
    return (
        <CSSTransition
            in={showTechCreation}
            unmountOnExit
            appear={true}
            timeout={{ enter: 300, exit: 300 }}
            classNames="modal"
        >
            <>
                <Container className="register-tech">
                    <div className="register-tech-header">
                        <p>Cadastrar Tecnologia</p>
                        <span onClick={alternateTechCreation}>X</span>
                    </div>
                    <div className="register-tech-body">
                        <Input
                            label="Nome"
                            name="tech"
                            placeholder="Nome da tecnologia"
                        />
                    </div>
                </Container>
                <Backdrop />
            </>
        </CSSTransition>
    );
}

export default RegisterTechModal;
