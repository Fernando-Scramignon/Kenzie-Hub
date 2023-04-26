import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
    background: var(--grey-4);
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TechSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 15px;

    padding: 0px 12px;
    margin-top: 18px;

    .tech-title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: 16px;
            font-weight: 600;
            font-family: "Inter", sans-serif;
        }

        #add-tech-btn {
            font-weight: 700;
            font-size: 16px;
            padding: 4px 7px;
            border-radius: 4px;

            background: var(--grey-3);

            transition: 0.5s;
            cursor: pointer;
            &:hover {
                background: var(--grey-2);
            }
        }
    }

    .tech-list {
        background: var(--grey-3);
        width: 100%;
        height: 300px;
        border-radius: 4px;
    }

    @media (min-width: 1024px) {
        padding: 0px 18%;
    }
`;

export { Container, TechSection };
