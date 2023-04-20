import axios from "axios";

import { IRegister } from "../interfaces/Login";

class AxiosRequest {
    static BASE_URL = "http://localhost:8000/api/";

    static LOGIN_PATH: string = "login/";

    static REGISTER_PATH: string = "users/";

    static async loginRequest(email: string, password: string): Promise<any> {
        const options = {
            method: "POST",
            url: `${this.BASE_URL}${this.LOGIN_PATH}`,
            headers: { "Content-Type": "application/json" },
            data: { email, password },
        };

        const response: Promise<any> = axios
            .request(options)
            .then((res) => res)
            .catch((error) => error);

        return response;
    }

    static async registerRequest(data: IRegister): Promise<any> {
        const options = {
            method: "POST",
            url: `${this.BASE_URL}${this.REGISTER_PATH}`,
            headers: { "Content-Type": "application/json" },
            data,
        };

        const response: Promise<any> = axios
            .request(options)
            .then((res) => res)
            .catch((error) => error);

        return response;
    }
}

export { AxiosRequest };
