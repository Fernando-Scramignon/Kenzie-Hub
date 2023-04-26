import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;
    padding: 0px 12px;
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--grey-4);

    cursor: pointer;
    transition: 0.4s;
    &:hover {
        background: var(--grey-2);
    }

    .tech-name {
        font-size: 14px;
        font-weight: 700;
        color: var(--grey-0);
    }

    .tech-level {
        font-size: 12px;
        font-weight: 400;
        color: var(--grey-1);
    }
`;

export { Container };
