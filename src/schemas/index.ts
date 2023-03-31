import * as yup from "yup";

import { moduleOptions } from "../pages/Register";

const userSchema = yup.object({
    name: yup
        .string()
        .required("Nome é obrigatório")
        .length(256, "Máximo de 256 caracteres"),
    email: yup
        .string()
        .required("E-mail é obrigatório")
        .length(256, "Máximo de 256 caracteres")
        .email("Formato de E-mail inválido"),
    bio: yup
        .string()
        .required("Bio é obrigatório")
        .length(512, "Máximo de 512 caracteres"),
    contact: yup
        .string()
        .required("Contato é obrigatório")
        .length(256, "Máximo de 256 caracteres"),
    course_module: yup
        .mixed()
        .oneOf(Object.values(moduleOptions))
        .required("Módulo é obrigatório"),
});

export { userSchema };
