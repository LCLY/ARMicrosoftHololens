import React from "react";
import { Container, Header } from "semantic-ui-react";
import ARHololens from "../Download/WallCracksAR.pdf";
import demoVid from "../Download/demo.mp4";
const ContainerComp = () => {
    return (
        <div className="container--margin">
            <Container text>
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
                    After reviewing research papers published by other
                    researchers, we decided on creating an application that
                    utilizes Microsoft Hololens and Augmented Reality to detect
                    wall cracks.
                </p>
                <h3>Why I join the team?</h3>
                <p>
                    I decided to join the
                    <a
                        target="_blank"
                        href="https://web.ics.purdue.edu/~jahansha/people.html"
                    >
                        <i>&nbsp;team&nbsp;</i>
                    </a>
                    because the new and interesting technology (Microsoft
                    Hololens) involved managed to caught my eye and how the
                    project might actually be helpful in building's inspection.
                    My team is the software team and we are responsible for
                    creating the application.
                </p>
                <h3 id="demoVideo">How it works</h3>
                <p>
                    The way we envision how the final product should work is the
                    building inspector or engineer uses the headwear (
                    <a
                        href="https://www.microsoft.com/en-us/hololens"
                        target="_blank"
                    >
                        <b>
                            <i>Microsoft Hololens</i>
                        </b>
                    </a>
                    ) to scan the interior of the buildings. If there is any new
                    crack on the wall, the application should be able to detect
                    and label them with important relevant information.
                </p>
                <h4>Demo:</h4>
                <video width="100%" height="100%" controls>
                    <source src={demoVid} type="video/mp4" />
                </video>
                <h3>Current features</h3>
                <p>
                    When user positions himself/herself in front of a wall and
                    carry out an air tap gesture, the camera on the hololens
                    will capture an image and the image will be sent to the
                    backend which is
                    <a
                        target="_blank"
                        href="https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/home"
                    >
                        &nbsp;Azure Custom Vision Service&nbsp;
                    </a>
                    . If the image taken matches with the data trained using
                    Azure Custom Vision service, a reply will return from the
                    Service and it will be displayed in the world-space through
                    the device.
                </p>
                <h3 id="documentDiv">Documentations</h3>
                <p>
                    Weekly documentations to keep track of progress and to act
                    as a reference/reminder for future self or other students.
                </p>
                <iframe src={ARHololens} width="100%" height="500px" />
                <div>
                    <a href={ARHololens} target="_blank">
                        View pdf in different tab
                    </a>
                </div>
                <h3>Future goals</h3>
                <p>
                    Display more accurate and precise data about the cracks such
                    as location, date or history, severity, future predictions
                    of the cracks and perhaps a display of the buildings BIM
                    model behind the wall cracks.
                </p>
            </Container>
        </div>
    );
};

export default ContainerComp;
