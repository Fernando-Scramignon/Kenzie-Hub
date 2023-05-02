import * as yup from "yup";
import { requiredMessage, maxCharMessage } from ".";

const STATUS_OPTIONS = ["Iniciante", "Intermediário", "Avançado"];

const techSchema = yup.object({
    title: yup
        .string()
        .required(requiredMessage("title"))
        .max(256, maxCharMessage(256)),
    status: yup
        .string()
        .required(requiredMessage("status"))
        .max(256, maxCharMessage(256)),
});

export { STATUS_OPTIONS, techSchema };
