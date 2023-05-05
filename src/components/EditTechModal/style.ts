import styled from "styled-components";

const Backdrop = styled.div`
    /* size */
    min-height: 100vh;
    min-width: 100vw;

    /* color */
    background: var(--grey-4);
    opacity: 0.5;

    /* position */
    top: 0;
    left: 0;
    position: fixed;
    z-index: 5;
`;

const Container = styled.div`
    /* size */
    width: 90vw;
    max-width: 370px;

    /* position */
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    z-index: 10;

    box-shadow: 0px 4px 32px -8px #00000040;
`;

const EditTechHeader = styled.div`
    /* color */
    background: var(--grey-2);
    color: var(--grey-0);

    /* size */
    height: 40px;
    padding: 0px 16px;
    border-radius: 4px 4px 0px 0px;

    /* flex */
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-weight: 700;
        font-size: 12px;
    }

    span {
        color: var(--grey-1);
        font-family: "Nunito", sans-serif;
        font-size: 12px;
        cursor: pointer;

        transition: 400ms;
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
`;

const EditTechBody = styled.div`
    /* size */
    min-height: 200px;
    padding: 22px 18px 0px;
    border-radius: 0px 0px 4px 4px;

    /* color */
    background: var(--grey-3);

    /* flex */
    display: flex;
    flex-direction: column;

    .input-div {
        /* flex */
        display: flex;
        flex-direction: column;
        gap: 24px;

        /* size */
        padding-bottom: 16px;

        label {
            font-size: 12px;
        }
    }

    .button-div {
        display: flex;
        justify-content: space-between;
        padding-bottom: 26px;
        gap: 18px;

        #delete-tech-button {
            width: 40%;
        }
    }
`;

export { Container, EditTechHeader, EditTechBody, Backdrop };
