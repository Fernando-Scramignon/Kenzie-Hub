import axios from "axios";

class AxiosRequest {
	static BASE_URL = "http://localhost:8000/api/";

	static loginRequest(email: string, password: string): void {
		const loginPath: string = "login/";

		const options = {
			method: "POST",
			url: `${this.BASE_URL}${loginPath}`,
			headers: { "Content-Type": "application/json" },
			data: { email, password },
		};

		axios
			.request(options)
			.then((response) => console.log(response))
			.catch((response) => console.error(response));
	}
}

export { AxiosRequest };
