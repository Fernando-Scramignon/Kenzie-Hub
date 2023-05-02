import { Container } from "./style";

import { ISelect } from "../../interfaces/Select";

function Select({ label, name, options, register }: ISelect) {
    // if the register function is not provided the tag changes
    const SELECT_TAG = register ? (
        <select id={name} {...register(name)}>
            {options?.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    ) : (
        <select id={name}>
            {options?.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );

    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            {SELECT_TAG}
        </Container>
    );
}

export default Select;
