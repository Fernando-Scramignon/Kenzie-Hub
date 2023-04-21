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
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
    }

    body {
        background-color: var(--grey-4);
    }

    input {
        outline: none;
        border: none;
    }
`;

export { GlobalStyle };
