import { Container, Backdrop } from "./style";

// used for animating the modal
import { CSSTransition } from "react-transition-group";

// interfaces
import { IRegisterTechModal } from "../../interfaces/Tech";
import { IRegisterTech } from "../../interfaces/Tech";

// components
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

// yup validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { STATUS_OPTIONS, techSchema } from "../../schemas/tech.schemas";

// classes
import { Colors } from "../../utils";
import { AxiosRequest } from "../../classes/axios";

import { Id, toast } from "react-toastify";
import { useEffect } from "react";

function RegisterTechModal({
    showTechCreation,
    alternateTechCreation,
    updateUserFunction,
}: IRegisterTechModal) {
    const TOAST_CONTAINER_TIME_TO_CLOSE: number = 3000;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterTech>({
        resolver: yupResolver(techSchema),
    });

    async function onSubmitFunction(data: IRegisterTech): Promise<void> {
        // fix this too
        const toastPopUp: Id = toast.loading("Registrando...");
        const response: any = await AxiosRequest.registerTech(data);

        if (response.status != 201) {
            let message: string = "Falha na criação";

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
                render: "Tecnologia criada",
                type: "success",
                isLoading: false,
                pauseOnHover: true,
                closeOnClick: true,
                closeButton: true,
                autoClose: TOAST_CONTAINER_TIME_TO_CLOSE,
            });
            updateUserFunction();
            alternateTechCreation();
        }
    }

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
                        <h3>Cadastrar Tecnologia</h3>
                        <span onClick={alternateTechCreation}>X</span>
                    </div>
                    <form
                        className="register-tech-body"
                        onSubmit={handleSubmit(onSubmitFunction)}
                    >
                        <Input
                            label="Nome"
                            name="title"
                            register={register}
                            errors={errors}
                            placeholder="Nome da tecnologia"
                        />
                        <Select
                            label="Selecionar status"
                            name="status"
                            register={register}
                            options={STATUS_OPTIONS}
                        />
                        <Button
                            background={Colors.colorPrimary}
                            color={Colors.white}
                            hoverBackground={Colors.colorPrimary50}
                        >
                            Cadastrar tecnologia
                        </Button>
                    </form>
                </Container>
                <Backdrop onClick={alternateTechCreation} />
            </>
        </CSSTransition>
    );
}

export default RegisterTechModal;
