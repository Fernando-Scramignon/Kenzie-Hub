import { Container } from "./style";

import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";
import { useNavigate, NavigateFunction } from "react-router-dom";

function Home() {
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login/");
            return;
        }
    }, []);

    const [user, setUser] = useState<IUser>();

    return (
        <Container>
            <Header />
            <h1>Home sweet home</h1>
            <span>under construction</span>
        </Container>
    );
}

export default Home;
