import { Container } from "./style";
import { IInfoProps } from "../../interfaces/Info";

function Info({ user }: IInfoProps) {
    return (
        <Container>
            <h1 onClick={() => console.log(user)}>
                {user ? user.name : "..."}
            </h1>
            <span>{user ? user.course_module : "..."}</span>
        </Container>
    );
}

export default Info;
