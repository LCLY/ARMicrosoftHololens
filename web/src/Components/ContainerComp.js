import React from "react";
import { Container, Header } from "semantic-ui-react";
const ContainerComp = () => {
    return (
        <Container text style={{ marginTop: "7em" }}>
            <Header as="h1">Semantic UI React Fixed Template</Header>
            <p>
                This is a basic fixed menu template using fixed size containers.
            </p>
            <p>
                A text container is used for the main container, which is useful
                for single column layouts.
            </p>
        </Container>
    );
};

export default ContainerComp;