import styled from "styled-components";

import { IButton } from "../../interfaces/Button";

const Container = styled.button<IButton>`
	/* color */
	background: ${(props) => props.background};
	color: ${(props) => props.color};
	border: 1.5px solid ${(props) => props.background};

	/* font */
	font-weight: 500;
	font-size: 12px;

	/* size */
	width: 100%;
	height: 36px;

	border-radius: 4px;

	transition: 400ms;
	&:hover {
		background: ${(props) => props.hoverBackground};
		border-color: ${(props) => props.hoverBackground};
		cursor: pointer;
	}
`;

export { Container };
