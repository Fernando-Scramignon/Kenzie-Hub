import { Container } from "./style";

import { ITechProps } from "../../interfaces/Tech";
import EditTechModal from "../EditTechModal";

import { useState } from "react";

function Tech({ tech }: ITechProps) {
    const [showTechEdition, setShowTechEdition] = useState<boolean>(false);

    function alternateShowTechEdition(): void {
        setShowTechEdition(!showTechEdition);
    }

    return (
        <>
            <Container onClick={alternateShowTechEdition}>
                <h4 className="tech-name">{tech && tech.title}</h4>
                <p className="tech-level">{tech && tech.status}</p>
            </Container>
            <EditTechModal
                tech={tech}
                showTechEdition={showTechEdition}
                alternateTechEdition={alternateShowTechEdition}
            />
        </>
    );
}

export default Tech;
