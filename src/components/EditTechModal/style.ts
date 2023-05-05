import styled from "styled-components";

const Container = styled.div`
    /* size */
    min-height: 270px;
    width: 90vw;

    /* position */
    position: fixed;
    top: 150px;
    z-index: 10;

    box-shadow: 0px 4px 32px -8px #00000040;
`;

const EditTechHeader = styled.div`
    h3 {
        font-weight: 700;
        font-size: 12px;
    }

    span {
        color: var(--grey-1);
        font-family: "Nunito", sans-serif;
        font-size: 12px;
    }

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
`;

const EditTechBody = styled.div`
    /* size */
    min-height: 200px;
    padding: 0px 18px;
    border-radius: 0px 0px 4px 4px;

    /* color */
    background: var(--grey-3);

    /* flex */
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export { Container, EditTechHeader, EditTechBody };
