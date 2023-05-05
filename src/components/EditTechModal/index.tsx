import { IEditTechModal } from "../../interfaces/Tech";
import { Container, EditTechHeader, EditTechBody } from "./style";

function EditTechModal({ alternateTechEdition, techTitle }: IEditTechModal) {
    return (
        <Container>
            <EditTechHeader>
                <h3>Tecnologia detalhes</h3>
                <span onClick={alternateTechEdition}>X</span>
            </EditTechHeader>
            <EditTechBody>
                <h1>{techTitle}</h1>
            </EditTechBody>
        </Container>
    );
}

export default EditTechModal;
