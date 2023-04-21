import { Container } from "./style";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error: any = useRouteError();

    return (
        <Container>
            <h1>Sorry :/</h1>
            <p>An unexpected error occurred</p>
            <span>
                <i>{error.statusText || error.message}</i>
            </span>
        </Container>
    );
}

export default ErrorPage;
