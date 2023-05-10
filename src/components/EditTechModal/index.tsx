import { IEditTechModal, IRegisterTech } from "../../interfaces/Tech";
import { ITech } from "../../interfaces/User";
import { Container, EditTechHeader, EditTechBody, Backdrop } from "./style";
import { CSSTransition } from "react-transition-group";

import Select from "../Select";
import Input from "../Input";
import Button from "../Button";

import { toast, Id } from "react-toastify";

import { useUser } from "../../contexts";
import { AxiosRequest } from "../../classes/axios";
import { Colors } from "../../utils";
import { STATUS_OPTIONS } from "../../schemas/tech.schemas";

import { yupResolver } from "@hookform/resolvers/yup";
import { techEditSchema } from "../../schemas/tech.schemas";
import { useForm } from "react-hook-form";

function EditTechModal({
    alternateTechEdition,
    tech,
    showTechEdition,
}: IEditTechModal) {
    const { getUpdateUser } = useUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Partial<ITech>>({
        resolver: yupResolver(techEditSchema),
    });

    const TOAST_CONTAINER_TIME_TO_CLOSE: number = 1500;

    async function techDeletionHandler(id: string): Promise<void> {
        const toastPopUp: Id = toast.loading("Excluindo...");
        const response: any = await AxiosRequest.deleteTech(id);
        let message: string;

        if (response.status != 204) {
            message = "Falha na exclusão";
            toast.update(toastPopUp, {
                render: message,
                type: "error",
                isLoading: false,
                pauseOnHover: true,
                closeButton: true,
                closeOnClick: true,
                autoClose: TOAST_CONTAINER_TIME_TO_CLOSE,
            });
        } else {
            message = "Tecnologia excluída";
            toast.update(toastPopUp, {
                render: message,
                type: "success",
                isLoading: false,
                pauseOnHover: true,
                closeButton: true,
                closeOnClick: true,
                autoClose: TOAST_CONTAINER_TIME_TO_CLOSE,
            });
            alternateTechEdition();
            getUpdateUser();
        }
    }

    interface ITechRegister {
        title?: string;
        status?: string;
    }
    async function techEditionHandler(
        data: Partial<IRegisterTech>
    ): Promise<void> {
        const toastPopUp: Id = toast.loading("Editando...");
        const response: any = await AxiosRequest.editTech(tech.id, data);
        let message: string = "Tecnologia editada";

        if (response.status != 200) {
            message = "Falha na edição";
            if (response.response.data.title.includes("already registered"))
                message = "Você já registrou essa tecnologia";
            toast.update(toastPopUp, {
                render: message,
                type: "error",
                isLoading: false,
                pauseOnHover: true,
                closeButton: true,
                closeOnClick: true,
                autoClose: TOAST_CONTAINER_TIME_TO_CLOSE,
            });
        } else {
            toast.update(toastPopUp, {
                render: message,
                type: "success",
                isLoading: false,
                pauseOnHover: true,
                closeButton: true,
                closeOnClick: true,
                autoClose: TOAST_CONTAINER_TIME_TO_CLOSE,
            });
            getUpdateUser();
            alternateTechEdition();
        }
    }

    return (
        <CSSTransition
            in={showTechEdition}
            unmountOnExit
            appear={true}
            timeout={{ enter: 300, exit: 300 }}
            classNames="modal"
        >
            <>
                <Container>
                    <EditTechHeader>
                        <h3 className="test">Tecnologia detalhes</h3>
                        <span onClick={alternateTechEdition}>X</span>
                    </EditTechHeader>
                    <EditTechBody onSubmit={handleSubmit(techEditionHandler)}>
                        <div className="input-div">
                            <Input
                                label="Nome do projeto"
                                name="title"
                                register={register}
                                errors={errors}
                                placeholder={tech.title}
                            />
                            <Select
                                label="Status"
                                name="status"
                                register={register}
                                options={STATUS_OPTIONS}
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
                                clickFunction={() =>
                                    techDeletionHandler(tech.id)
                                }
                            >
                                Excluir
                            </Button>
                        </div>
                    </EditTechBody>
                </Container>
                <Backdrop onClick={alternateTechEdition} />
            </>
        </CSSTransition>
    );
}

export default EditTechModal;
