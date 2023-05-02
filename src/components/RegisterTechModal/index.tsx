import { Container, Backdrop } from "./style";
import Input from "../Input";
import Select from "../Select";
import { CSSTransition } from "react-transition-group";
import { IRegisterTechModal } from "../../interfaces/Tech";
import { STATUS_OPTIONS } from "../../schemas/tech.schemas";
import Button from "../Button";
import { Colors } from "../../utils";

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
                            name="title"
                            placeholder="Nome da tecnologia"
                        />
                        <Select
                            label="Selecionar status"
                            name="status"
                            options={STATUS_OPTIONS}
                        />
                        <Button
                            background={Colors.colorPrimary}
                            color={Colors.white}
                            hoverBackground={Colors.colorPrimary50}
                        >
                            Cadastrar tecnologia
                        </Button>
                    </div>
                </Container>
                <Backdrop />
            </>
        </CSSTransition>
    );
}

export default RegisterTechModal;
