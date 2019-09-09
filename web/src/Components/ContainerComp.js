import React from "react";
import { Container, Header } from "semantic-ui-react";
const ContainerComp = () => {
    return (
        <Container text style={{ marginTop: "7em" }}>
            <Header as="h1">
                Wall Cracks Detection with Microsoft Hololens
            </Header>
            <p>
                This is a research project proposed by
                <a
                    target="_blank"
                    href="https://scholar.google.com/citations?user=rDHdOQIAAAAJ&hl=en"
                >
                    &nbsp;
                    <b>
                        <i>Dr.Mohammad R. Jahanshahi</i>
                    </b>
                    &nbsp;
                </a>
                and
                <a
                    href="https://www.researchgate.net/profile/Tarutal_Ghosh_Mondal2"
                    target="blank"
                >
                    &nbsp;
                    <b>
                        <i>Tarutal Ghosh Mondal</i>
                    </b>
                    &nbsp;
                </a>
                from Purdue University.
            </p>
            <p>
                After reviewing numerous research papers, we decided on creating
                an application that utilizes Microsoft Hololens and Augmented
                Reality to detect wall cracks.
            </p>
            <p>
                I decided to join the
                <a
                    target="_blank"
                    href="https://web.ics.purdue.edu/~jahansha/people.html"
                >
                    <i>&nbsp;team&nbsp;</i>
                </a>
                because of the new and interesting technology (Microsoft
                Hololens) involved managed to caught my eye and how the project
                might actually be helpful in building's inspection.
            </p>
            <p>
                The project caught my eye because of the new technology involved
                and how
            </p>
        </Container>
    );
};

export default ContainerComp;
