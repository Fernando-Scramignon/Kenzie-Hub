import { ITechProps } from "../../interfaces/Tech";
import { Container } from "./style";

function Tech({ tech }: ITechProps) {
    return (
        <Container>
            <h4 className="tech-name">{tech && tech.title}</h4>
            <p className="tech-level">{tech && tech.status}</p>
        </Container>
    );
}

export default Tech;
