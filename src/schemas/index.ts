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

const NEW_REGEX: RegExp = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
// const PASSWORD_REGEX: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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
        .matches(/^\S+$/, "Não pode conter espaços")
        .min(8, "Mínimo de 8 caracteres"),
    passwordMatch: yup
        .string()
        .required(requiredMessage("Confirmação"))
        .oneOf([yup.ref("password")], "Senhas tem que ser iguais"),
    course_module: yup
        .mixed()
        .oneOf(Object.values(moduleOptions))
        .required("Módulo é obrigatório"),
});

const userLoginSchema = yup.object({
    email: yup
        .string()
        .max(256, maxCharMessage(256))
        .required(requiredMessage("E-mail")),
    password: yup.string().required(requiredMessage("Senha")),
});

export {
    userSchema,
    userLoginSchema,
    moduleOptions,
    requiredMessage,
    maxCharMessage,
};
