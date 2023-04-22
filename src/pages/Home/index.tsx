import { Container } from "./style";

import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";
import { useNavigate, NavigateFunction } from "react-router-dom";

import { AxiosRequest } from "../../classes/axios";

function Home() {
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login/");
            return;
        }
    }, []);

    async function testGetUser(): Promise<void> {
        let token: string = localStorage.getItem("token")!;
        const res: any = await AxiosRequest.getUser(token);
        console.log(res);
    }

    const [user, setUser] = useState<IUser>();

    return (
        <Container>
            <Header />
            <h1 onClick={testGetUser}>Home sweet home</h1>
            <span>under construction</span>
        </Container>
    );
}

export default Home;
