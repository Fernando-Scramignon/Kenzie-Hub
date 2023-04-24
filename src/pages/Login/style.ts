import styled from "styled-components";
import { appearFromBottom, fadeIn } from "../../styles/animations";

const Container = styled.div`
    min-height: 100vh;

    background: var(--grey-4);
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
        height: 18px;
        animation: ${fadeIn} 1.5s;
    }
`;

const LoginForm = styled.form`
    width: 90%;
    max-width: 370px;
    padding: 33px 17px;

    background: var(--grey-3);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    box-shadow: 0px 3.2px 32.1px -8px #00000040;
    border-radius: 3.2px;

    animation: ${appearFromBottom} 1s;

    h2 {
        font-size: 16px;
        font-weight: 700;
    }

    @media (min-width: 1024px) {
        h2 {
            font-size: 22px;
        }
    }
`;

const RegisterSection = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;

    span {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        color: var(--grey-1);
        font-size: 9px;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    @media (min-width: 1024px) {
        span {
            font-size: 12px;
        }
    }
`;

export { Container, LoginForm, RegisterSection };
