import styled from "styled-components";

const Container = styled.div`
	min-height: 100vh;
	padding-top: 60px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;

	background: var(--grey-4);
`;

const RegisterHeader = styled.header`
	width: 90%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		height: 18px;
	}

	button {
		width: 100px;
		font-weight: 600;
	}
`;

const RegisterForm = styled.form`
	width: 90%;
	padding: 18px;
	border-radius: 3.2px;

	background: var(--grey-3);

	color: var(--grey-0);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 26px;
`;

const FormTitleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 17px;

	h2 {
		font-weight: 700;
		font-size: 16px;
	}

	p {
		font-size: 10px;
		color: var(--grey-1);
	}
`;

const FormInputDiv = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 22px;
`;

export { Container, RegisterHeader, RegisterForm, FormTitleDiv, FormInputDiv };
