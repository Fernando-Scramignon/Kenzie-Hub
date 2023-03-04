import styled from "styled-components";

const Container = styled.div`
	min-height: 100vh;

	background: var(--grey-4);
	color: white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	img {
		height: 18px;
	}
`;

const LoginForm = styled.form`
	width: 90%;
	padding: 33px 17px;

	background: var(--grey-3);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	box-shadow: 0px 3.2px 32.1px -8px #00000040;
	border-radius: 3.2px;
`;

const RegisterSection = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 17px;

	span {
		font-family: "Inter", sans-serif;
		font-weight: 600;
		color: var(--grey-1);
		font-size: 9px;

		&:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;

export { Container, LoginForm, RegisterSection };
