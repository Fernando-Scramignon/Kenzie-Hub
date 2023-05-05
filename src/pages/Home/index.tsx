import { Container, TechSection } from "./style";

import { CSSTransition } from "react-transition-group";

import Header from "../../components/Header";
import Info from "../../components/Info";
import Tech from "../../components/Tech";
import RegisterTechModal from "../../components/RegisterTechModal";

import { ITech, IUser } from "../../interfaces/User";

import { useEffect, useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

import { AxiosRequest } from "../../classes/axios";
import EditTechModal from "../../components/EditTechModal";

function Home() {
    const [user, setUser] = useState<IUser>();
    const [showTechCreation, setShowTechCreation] = useState<boolean>(false);
    const [showTechEdition, setShowTechEdition] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();

    function alternateShowTechCreation(): void {
        setShowTechCreation(!showTechCreation);
    }

    function alternateShowTechEdition(): void {
        setShowTechEdition(!showTechEdition);
    }

    async function getUpdateUser() {
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
    }

    useEffect(() => {
        getUpdateUser();
    }, []);

    return (
        <Container>
            <Header />
            <Info user={user} />
            <TechSection>
                <div className="tech-title">
                    <h3>Tecnologias</h3>
                    <span id="add-tech-btn" onClick={alternateShowTechCreation}>
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
            <RegisterTechModal
                updateUserFunction={getUpdateUser}
                showTechCreation={showTechCreation}
                alternateTechCreation={alternateShowTechCreation}
            />
            {/* <EditTechModal /> */}
        </Container>
    );
}

export default Home;
