import styled from "styled-components";

const Container = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 17px;

	.label-div {
		/* This will make me able to position the eye icon horizontaly */
	}

	label {
		font-family: "Inter", sans-serif;
		font-size: 12px;
	}

	input {
		height: 38px;
		width: 100%;
		background: var(--grey-2);
		color: var(--grey-0);

		padding: 8px 13px;

		border-radius: 3.2px;
	}

	input::placeholder {
		color: var(--grey-1);
		font-family: "Inter", sans-serif;
		font-weight: 400;
		font-size: 12px;
	}
`;

const PasswordDiv = styled.div`
	display: flex;

	.eye-icon-div {
		align-self: center;
		position: relative;
		right: 25px;
		bottom: 7px;
		height: 0px;
		width: 0px;
	}
`;

export { Container, PasswordDiv };
