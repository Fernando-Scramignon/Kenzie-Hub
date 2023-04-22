import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 36px 12px;
    border-bottom: 2px solid var(--grey-3);

    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-size: 18px;
        font-weight: 700;
        font-family: "Inter", sans-serif;

        color: var(--grey-0);
    }

    span {
        font-size: 12px;
        font-weight: 600;
        font-family: "Inter", sans-serif;

        color: var(--grey-1);
    }

    @media (min-width: 1024px) {
        padding: 50px 18%;
        flex-direction: row;
        justify-content: space-between;

        h1 {
            font-size: 20px;
        }

        span {
            font-size: 14px;
        }
    }
`;

export { Container };
