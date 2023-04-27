import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    max-width: 370px;
    height: 250px;

    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px #00000040;

    position: fixed;
    z-index: 10;

    border-radius: 4px;

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
    }

    .register-tech-body {
        display: flex;
        flex-direction: column;
        padding: 20px 17px 25px;

        label {
            font-weight: 400;
            font-size: 12px;
            color: var(--grey-0);
        }

        .default-input {
            border: 1px solid var(--grey-0);
        }
    }
`;

export { Container };
