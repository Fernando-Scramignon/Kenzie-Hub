import styled from "styled-components";
import { appearFromBottom, fadeIn } from "../../styles/animations";

const Container = styled.div`
    min-height: 100vh;
    padding-top: 40px;
    padding-bottom: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    background: var(--grey-4);
`;

const RegisterHeader = styled.header`
    width: 90%;
    max-width: 370px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    animation: ${fadeIn} 1.5s;

    img {
        height: 18px;
        cursor: pointer;
    }

    button {
        width: 100px;
        font-weight: 600;
    }

    @media (min-width: 1024px) {
        img {
            height: 20px;
        }

        button {
            font-size: 14px;
        }
    }
`;

const RegisterForm = styled.form`
    width: 90%;
    max-width: 370px;
    padding: 18px;
    border-radius: 3.2px;

    background: var(--grey-3);

    color: var(--grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;

    animation: ${appearFromBottom} 1s;
`;

const FormTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;

    h2 {
        font-weight: 700;
        font-size: 16px;
    }

    p {
        font-size: 10px;
        color: var(--grey-1);
    }

    @media (min-width: 1024px) {
        h2 {
            font-size: 20px;
        }

        p {
            font-size: 12px;
        }
    }
`;

const FormInputDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 22px;
`;

export { Container, RegisterHeader, RegisterForm, FormTitleDiv, FormInputDiv };
