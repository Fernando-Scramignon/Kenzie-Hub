import { keyframes, Keyframes } from "styled-components";

const fadeIn: Keyframes = keyframes`
from {
    opacity: 0;
}

to {
    opacity: 1;
}

`;

const appearFromLeft: Keyframes = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
}

to {
    opacity: 1;
    transform: translateX(0px);
}
`;

const appearFromBottom: Keyframes = keyframes`
from {
    opacity: 0;
    transform: translateY(50px);
}
to {
    opacity: 1;
    transform: translateY(0px);
}
`;

const appearFromRight: Keyframes = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
}

to {
    opacity: 1;
    transform: translateX(0px);
}
`;

const appearFromTop: Keyframes = keyframes`
from {
    opacity: 0;
    transform: translateY(-50px);
}

to {
    opacity: 1;
    transform: translateY(0px);
}

`;

export {
    fadeIn,
    appearFromLeft,
    appearFromBottom,
    appearFromRight,
    appearFromTop,
};
