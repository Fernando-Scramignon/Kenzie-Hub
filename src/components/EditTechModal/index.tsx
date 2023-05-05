import { IEditTechModal } from "../../interfaces/Tech";
import { Container, EditTechHeader, EditTechBody } from "./style";

function EditTechModal({ alternateTechEdition }: IEditTechModal) {
    return (
        <Container>
            <EditTechHeader>
                <h3>Tecnologia detalhes</h3>
                <span onClick={alternateTechEdition}>X</span>
            </EditTechHeader>
            <EditTechBody></EditTechBody>
        </Container>
    );
}

export default EditTechModal;
