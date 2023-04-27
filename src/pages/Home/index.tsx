import { Container, TechSection } from "./style";

import Header from "../../components/Header";
import Info from "../../components/Info";
import Tech from "../../components/Tech";
import RegisterTechModal from "../../components/RegisterTechModal";

import { useEffect, useState } from "react";
import { ITech, IUser } from "../../interfaces/User";
import { useNavigate, NavigateFunction } from "react-router-dom";

import { AxiosRequest } from "../../classes/axios";

function Home() {
    const [user, setUser] = useState<IUser>();
    const [isTechCreationOpen, setIsTechCreationOpen] = useState<boolean>();
    const navigate: NavigateFunction = useNavigate();

    function alternateIsTechCreationOpen(): void {
        setIsTechCreationOpen(!isTechCreationOpen);
    }

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
            <TechSection>
                <div className="tech-title">
                    <h3>Tecnologias</h3>
                    <span
                        id="add-tech-btn"
                        onClick={alternateIsTechCreationOpen}
                    >
                        +
                    </span>
                </div>
                {user?.techs.length != 0 && (
                    <div className="tech-list">
                        {user?.techs.map((tech: ITech) => (
                            <Tech key={tech.id} tech={tech} />
                        ))}
                    </div>
                )}
            </TechSection>
            {isTechCreationOpen && <RegisterTechModal />}
        </Container>
    );
}

export default Home;
