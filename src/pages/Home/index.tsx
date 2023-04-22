import { Container } from "./style";

import Header from "../../components/Header";
import Info from "../../components/Info";

import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";
import { useNavigate, NavigateFunction } from "react-router-dom";

import { AxiosRequest } from "../../classes/axios";

function Home() {
    const [user, setUser] = useState<IUser>();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const token: string | null = localStorage.getItem("token");
        if (!token) {
            navigate("/login/");
            return;
        }

        AxiosRequest.getUser(token)
            .then((res) => setUser(res.data[0]))
            .catch((err) => {
                console.error(err);
                navigate("/login/");
            });
    }, []);

    return (
        <Container>
            <Header />
            <Info user={user} />
        </Container>
    );
}

export default Home;
