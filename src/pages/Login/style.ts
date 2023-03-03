import styled from "styled-components";

const Container = styled.div`
	min-height: 100vh;
	background: var(--grey-4);
	color: white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 100px;
		height: 14px;
	}
`;

const LoginForm = styled.form`
	background: var(--grey-3);
	width: 90%;
`;

export { Container, LoginForm };
