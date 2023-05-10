import axios from "axios";

import { IRegister } from "../interfaces/Login";
import { IRegisterTech } from "../interfaces/Tech";

class AxiosRequest {
    static BASE_URL = "http://localhost:8000/api/";

    static LOGIN_PATH: string = "login/";

    static GET_USER_PATH: string = "user/";

    static REGISTER_PATH: string = "users/";

    static TECH_PATH: string = "techs/";

    static async getUser(token: string): Promise<any> {
        const options = {
            method: "GET",
            url: `${this.BASE_URL}${this.GET_USER_PATH}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response: Promise<any> = axios
            .request(options)
            .then((res) => res)
            .catch((error) => error);

        return response;
    }

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

    static async registerTech(data: IRegisterTech): Promise<any> {
        const options = {
            method: "POST",
            url: `${this.BASE_URL}${this.TECH_PATH}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data,
        };

        const response: Promise<any> = axios
            .request(options)
            .then((res) => res)
            .catch((error) => error);

        return response;
    }

    static async deleteTech(techId: string): Promise<any> {
        const options = {
            method: "DELETE",
            url: `${this.BASE_URL}${this.TECH_PATH}${techId}/`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        const response: Promise<any> = axios
            .request(options)
            .then((res) => res)
            .catch((error) => error);

        return response;
    }

    static async editTech(
        techId: string,
        data: Partial<IRegisterTech>
    ): Promise<any> {
        const options = {
            method: "PATCH",
            url: `${this.BASE_URL}${this.TECH_PATH}${techId}/`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data: data,
        };
        const response: Promise<any> = axios
            .request(options)
            .then((res) => res)
            .catch((error) => error);

        return response;
    }
}

export { AxiosRequest };
