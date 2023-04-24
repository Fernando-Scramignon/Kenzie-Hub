import { Container, PasswordDiv } from "./style";

import { IInput } from "../../interfaces/Input";

import { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Colors } from "../../utils";

function Input({
    name,
    label,
    placeholder,
    type = "default",
    register,
    errors,
}: IInput) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function alternateIsPasswordVisible() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const EYE_ICON = (
        <AiFillEye
            onClick={alternateIsPasswordVisible}
            className="eye-icon"
            size={17}
            style={{ color: Colors.grey1 }}
        />
    );

    const EYE_ICON_HIDE = (
        <AiFillEyeInvisible
            onClick={alternateIsPasswordVisible}
            className="eye-icon"
            size={17}
            style={{ color: Colors.grey1 }}
        />
    );

    const INPUT_TYPES = {
        default: register ? (
            <input
                className="default-input"
                type="text"
                placeholder={placeholder}
                {...register(name)}
            />
        ) : (
            <input
                name={name}
                className="default-input"
                type="text"
                placeholder={placeholder}
            />
        ),
        password: register ? (
            <PasswordDiv>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={placeholder}
                    {...register(name)}
                />
                <div className="eye-icon-div">
                    {isPasswordVisible ? EYE_ICON_HIDE : EYE_ICON}
                </div>
            </PasswordDiv>
        ) : (
            <PasswordDiv>
                <input
                    name={name}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={placeholder}
                />
                <div className="eye-icon-div">
                    {isPasswordVisible ? EYE_ICON_HIDE : EYE_ICON}
                </div>
            </PasswordDiv>
        ),
    };

    return (
        <Container>
            <div className="label-div">
                <label htmlFor="input">{label}</label>
                <span className="form-errors">
                    {errors && errors[name]?.message}
                </span>
            </div>
            {INPUT_TYPES[type]}
        </Container>
    );
}

export default Input;
