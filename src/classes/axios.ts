import axios from "axios";

import { IRegister } from "../interfaces/Login";

class AxiosRequest {
	static BASE_URL = "http://localhost:8000/api/";

	static LOGIN_PATH: string = "login/";

	static REGISTER_PATH: string = "users/";

	static loginRequest(email: string, password: string): void {
		const options = {
			method: "POST",
			url: `${this.BASE_URL}${this.LOGIN_PATH}`,
			headers: { "Content-Type": "application/json" },
			data: { email, password },
		};

		axios
			.request(options)
			.then((response) => console.log(response))
			.catch((response) => console.error(response));
	}

	static registerRequest(data: IRegister): void {
		const options = {
			method: "POST",
			url: `${this.BASE_URL}${this.REGISTER_PATH}`,
			headers: { "Content-Type": "application/json" },
			data,
		};

		axios
			.request(options)
			.then((response) => console.log(response))
			.catch((response) => console.error(response));
	}
}

export { AxiosRequest };
