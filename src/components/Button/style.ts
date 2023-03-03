import styled from "styled-components";

import { IButton } from "../../interfaces/Button";

const Container = styled.button<IButton>`
	/* color */
	background: ${(props) => props.background};
	color: white;

	/* font */
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 12px;

	/* size */
	width: 100%;
	height: 30px;
`;

export { Container };
