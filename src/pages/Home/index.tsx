import { Container, TechSection } from "./style";

import Header from "../../components/Header";
import Info from "../../components/Info";
import Tech from "../../components/Tech";
import RegisterTechModal from "../../components/RegisterTechModal";

import { ITech } from "../../interfaces/User";

import { useEffect, useState } from "react";
import { useUser } from "../../contexts";

function Home() {
    const { user, getUpdateUser } = useUser();
    const [showTechCreation, setShowTechCreation] = useState<boolean>(false);

    function alternateShowTechCreation(): void {
        setShowTechCreation(!showTechCreation);
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
        </Container>
    );
}

export default Home;
