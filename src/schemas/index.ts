import * as yup from "yup";

// import { moduleOptions } from "../pages/Register";

function maxCharMessage(number: number): string {
    return `Máximo de ${number} caracteres`;
}

function requiredMessage(name: string): string {
    return `${name} é obrigatório`;
}

const moduleOptions = [
    "Primeiro módulo",
    "Segundo módulo",
    "Terceiro módulo",
    "Quarto módulo",
];

const PASSWORD_REGEX: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const userSchema = yup.object({
    name: yup
        .string()
        .required(requiredMessage("Nome"))
        .max(256, maxCharMessage(256)),
    email: yup
        .string()
        .required(requiredMessage("E-mail"))
        .max(256, maxCharMessage(256))
        .email("Formato de E-mail inválido"),
    bio: yup
        .string()
        .required(requiredMessage("Bio"))
        .max(512, maxCharMessage(512)),
    contact: yup
        .string()
        .required(requiredMessage("Contato"))
        .max(256, maxCharMessage(256)),
    password: yup
        .string()
        .required(requiredMessage("Senha"))
        .max(256, maxCharMessage(256))
        .matches(PASSWORD_REGEX, "Senha em formato inválido"),
    passwordMatch: yup
        .string()
        .required(requiredMessage("Confirmação"))
        .oneOf([yup.ref("password")], "Senhas tem que ser iguais"),
    course_module: yup
        .mixed()
        .oneOf(Object.values(moduleOptions))
        .required("Módulo é obrigatório"),
});

export { userSchema, moduleOptions };
