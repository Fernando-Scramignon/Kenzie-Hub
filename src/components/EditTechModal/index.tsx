import { Container, EditTechHeader, EditTechBody } from "./style";

function EditTechModal() {
    return (
        <Container>
            <EditTechHeader>
                <h3>Tecnologia detalhes</h3>
                <span>X</span>
            </EditTechHeader>
            <EditTechBody></EditTechBody>
        </Container>
    );
}

export default EditTechModal;
