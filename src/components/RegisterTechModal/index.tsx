import { Container, Backdrop } from "./style";
import Input from "../Input";
import Select from "../Select";
import { CSSTransition } from "react-transition-group";
import { IRegisterTechModal } from "../../interfaces/Tech";
import { IRegisterTech } from "../../interfaces/Tech";
import { STATUS_OPTIONS, techSchema } from "../../schemas/tech.schemas";
import Button from "../Button";
import { Colors } from "../../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AxiosRequest } from "../../classes/axios";

function RegisterTechModal({
    showTechCreation,
    alternateTechCreation,
    updateUserFunction,
}: IRegisterTechModal) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterTech>({
        resolver: yupResolver(techSchema),
    });

    async function onSubmitFunction(data: IRegisterTech): Promise<void> {
        const response: Promise<any> = await AxiosRequest.registerTech(data);
        updateUserFunction();
        alternateTechCreation();
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
                        <p>Cadastrar Tecnologia</p>
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
                <Backdrop />
            </>
        </CSSTransition>
    );
}

export default RegisterTechModal;
