import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    height: 250px;
    background: var(--grey-3);

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
`;

export { Container };
