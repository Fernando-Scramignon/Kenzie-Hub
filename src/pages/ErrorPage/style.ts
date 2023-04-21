import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

const Container = styled.div`
    min-height: 100vh;
    background: var(--grey-4);
    color: var(--grey-0);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        opacity: 0.6;
    }

    h1,
    p {
        animation: ${fadeIn} 1s;
    }
`;

export { Container };
