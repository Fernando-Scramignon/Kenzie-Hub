import * as yup from "yup";

import { moduleOptions } from "../pages/Register";

function maxCharMessage(number: number): string {
    return `Máximo de ${number} caracteres`;
}

function requiredMessage(name: string): string {
    return `${name} é obrigatório`;
}

const PASSWORD_REGEX: RegExp =
    /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=D*d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/;

const userSchema = yup.object({
    name: yup
        .string()
        .required(requiredMessage("name"))
        .max(256, maxCharMessage(256)),
    email: yup
        .string()
        .required(requiredMessage("E-mail"))
        .length(256, maxCharMessage(256))
        .email("Formato de E-mail inválido"),
    bio: yup
        .string()
        .required(requiredMessage("Bio"))
        .length(512, maxCharMessage(512)),
    contact: yup
        .string()
        .required(requiredMessage("Contato"))
        .length(256, maxCharMessage(256)),
    password: yup
        .string()
        .required(requiredMessage("Senha"))
        .length(256, maxCharMessage(256))
        .matches(PASSWORD_REGEX, "Senha em formato inválido"),
    passwordMatch: yup
        .string()
        .required(requiredMessage("Confirmação de senha"))
        .oneOf([yup.ref("password")], "Senhas tem que ser iguais"),
    // course_module: yup
    //     .mixed()
    //     .oneOf(Object.values(moduleOptions))
    //     .required("Módulo é obrigatório"),
});

export { userSchema };
