import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 60px;

    padding: 0px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: var(--grey-4);
    border-bottom: 2px solid var(--grey-3);

    #home-logo {
        height: 18px;
    }

    #home-logout {
        font-size: 13px;
        font-family: "Inter";
        font-weight: 600;

        width: 60px;
        border-radius: 6px;
    }

    @media (min-width: 1024px) {
        padding: 0px 18%;

        #home-logo {
            height: 20px;
        }

        #home-logout {
            width: 80px;
        }
    }
`;

export { Container };
