import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 17px;

	label {
		font-size: 12px;
	}

	select {
		height: 38px;
		width: 100%;
		padding-left: 13px;

		background: var(--grey-2);
		color: var(--grey-1);

		border-radius: 3.2px;

		border: none;
		outline: none;

		&::placeholder {
			color: var(--grey-1);
		}
	}

	option {
		color: var(--grey-1);
		font-family: "Inter", sans-serif;
		font-weight: 400;
		font-size: 12px;
	}

	@media (min-width: 1024px) {
		label {
			font-size: 14px;
		}
	}
`;

export { Container };
