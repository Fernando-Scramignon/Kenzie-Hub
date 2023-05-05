import { IEditTechModal } from "../../interfaces/Tech";
import { Container, EditTechHeader, EditTechBody, Backdrop } from "./style";

import Select from "../Select";
import Input from "../Input";
import Button from "../Button";

import { Colors } from "../../utils";
import { moduleOptions } from "../../schemas";

function EditTechModal({ alternateTechEdition, techTitle }: IEditTechModal) {
    return (
        <>
            <Container>
                <EditTechHeader>
                    <h3>Tecnologia detalhes</h3>
                    <span onClick={alternateTechEdition}>X</span>
                </EditTechHeader>
                <EditTechBody>
                    <div className="input-div">
                        <Input
                            label="Nome do projeto"
                            name="techTitle"
                            placeholder={techTitle}
                        />
                        <Select
                            label="Status"
                            name="techStatus"
                            options={moduleOptions}
                        />
                    </div>
                    <div className="button-div">
                        <Button
                            id="edit-tech-button"
                            background={Colors.colorPrimaryDisable}
                            color={Colors.white}
                            hoverBackground={Colors.colorPrimary50}
                        >
                            Salvar alterações
                        </Button>
                        <Button
                            id="delete-tech-button"
                            background={Colors.grey1}
                            hoverBackground={Colors.grey2}
                        >
                            Excluir
                        </Button>
                    </div>
                </EditTechBody>
            </Container>
            <Backdrop onClick={alternateTechEdition} />
        </>
    );
}

export default EditTechModal;
