import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

const Container = styled.div`
    width: 90%;
    max-width: 370px;

    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px #00000040;

    position: fixed;
    z-index: 10;

    border-radius: 4px;
    /* animation: ${fadeIn} 0.5s; */

    margin-top: 150px;
    .register-tech-header {
        height: 45px;
        padding: 0px 16px;
        border-radius: 4px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 22px;

        background: var(--grey-2);

        p {
            font-size: 12px;
            font-weight: 700;
        }

        span {
            font-family: "Nunito";
            font-size: 12px;
            color: var(--grey-1);

            cursor: pointer;
            transition: 0.4s;
            &:hover {
                color: var(--grey-0);
            }
        }

        @media (min-width: 1024px) {
            h3 {
                font-size: 14px;
            }

            span {
                font-size: 16px;
            }
        }
    }

    .register-tech-body {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 20px 17px 25px;

        label {
            font-weight: 400;
            font-size: 12px;
            color: var(--grey-0);
        }
    }
`;

const Backdrop = styled.div`
    z-index: 5;
    min-height: 100vh;
    min-width: 100vw;
    background: var(--grey-4);
    opacity: 0.5;
    position: fixed;
`;

export { Container, Backdrop };
