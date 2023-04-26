import { Container } from "./style";
import { IInfoProps } from "../../interfaces/Info";
import { MODULES_MAP } from "../../utils";

function Info({ user }: IInfoProps) {
    return (
        <Container>
            <h1>{user ? `Olá, ${user.name}` : "..."}</h1>
            <span>{user ? MODULES_MAP[user.course_module] : "..."}</span>
        </Container>
    );
}

export default Info;
