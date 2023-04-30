import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-50: #FF427F;
        --color-primary-disable: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --success: #3FE864;
        --negative: #E83F5B;

        /* toastify */
        --toastify-color-dark: var(--grey-2);
        --toastify-color-success: var(--success);
        --toastify-icon-color-success: var(--success);
        --toastify-color-error: var(--negative);
        --toastify-icon-color-error: var(--negative);

        --toastify-font-family: "Inter", sans-serif;
        --toastify-text-color-dark: var(--grey-0);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
    }

    body {
        background-color: var(--grey-4);
        .Toastify__toast-body {
            font-weight: 700;
        }
    }

    input {
        outline: none;
        border: none;
    }


    .modal-enter {
        opacity: 0;
    }


    .modal-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }

    .modal-exit {
        opacity: 1;
    }

    .modal-exit-active {
        opacity: 0;
        transition: opacity 500ms;
    }
`;

export { GlobalStyle };
