import React from "react";
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from "semantic-ui-react";

const Footer = () => {
    return (
        <Segment
            inverted
            vertical
            style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
            id="footerDiv"
        >
            <Container textAlign="center">
                <Grid divided inverted stackable>
                    <Grid.Column width={6} style={{ textAlign: "left" }}>
                        <Header inverted as="h4" content="Reference links" />
                        <List link inverted>
                            <List.Item
                                as="a"
                                target="_blank"
                                href="https://www.researchgate.net/post/How_can_AR_VR_help_advance_the_AEC_industry_research_and_practice"
                            >
                                How can AR/VR help advance the AEC industry
                                research and practice?
                            </List.Item>
                            <List.Item
                                as="a"
                                href="http://papers.cumincad.org/data/works/att/caadria2014_161.content.pdf"
                                target="_blank"
                            >
                                Immersive Virtual Environments: Experiments on
                                impacting design and human building interaction
                            </List.Item>

                            <List.Item
                                as="a"
                                href="https://www.sciencedirect.com/science/article/pii/S2351978918300222"
                                target="_blank"
                            >
                                Augmented and Virtual Reality for Inspection and
                                Maintenance Processes in the Aviation Industry
                            </List.Item>
                            <List.Item
                                as="a"
                                target="_blank"
                                href="https://www.sciencedirect.com/science/article/abs/pii/S0926580512002166"
                            >
                                Augmented Reality in built environment:
                                Classification and implications for future
                                research
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6} style={{ textAlign: "left" }}>
                        <Header inverted as="h4" content="Others" />
                        <List link inverted>
                            <List.Item
                                as="a"
                                href="https://www.sciencedirect.com/science/article/abs/pii/S0926580513000022"
                                target="_blank"
                            >
                                Research trends and opportunities of augmented
                                reality applications in AEC
                            </List.Item>
                            <List.Item
                                as="a"
                                href="https://ascelibrary.org/doi/10.1061/%28ASCE%290887-3801%282007%2921%3A5%28303%29"
                                target="_blank"
                            >
                                Evaluation of AR for Rapid Assessment of
                                Earthquake-Induced Building Damage
                            </List.Item>
                            <List.Item
                                as="a"
                                target="_blank"
                                href="https://pdfs.semanticscholar.org/8537/43224d2d4ceb83bb9af50eb15c7ee98ddc89.pdf"
                            >
                                Augmented Reality in Architectural Construction,
                                Inspection, and Renovation
                            </List.Item>
                            <List.Item
                                as="a"
                                target="_blank"
                                href="https://www.researchgate.net/publication/261045453_Augmented_Reality_for_Construction_Site_Monitoring_and_Documentation"
                            >
                                Augmented Reality for Construction Site
                                Monitoring and Documentation
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4} style={{ textAlign: "left" }}>
                        <Header
                            inverted
                            as="h4"
                            content="Other VR/AR projects"
                        />

                        <a href="https://lcly.github.io/BusinessCardAR/">
                            Business Card AR
                        </a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=kZ6j14Q1mc8&t=3s">
                            Carnival VR
                        </a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=c8QX4yS26Pc&t=2s">
                            Escape Room VR
                        </a>
                    </Grid.Column>
                </Grid>

                <Divider inverted section />
                <div>
                    <a
                        href="https://github.com/LCLY/MRHololens"
                        className="inherit__link"
                    >
                        <i className="fab fa-github footer__icon" />
                    </a>
                    <a
                        href="https://linkedin.com/in/lcly9294/"
                        className="inherit__link"
                    >
                        <i className="fab fa-linkedin footer__icon" />
                    </a>
                    <a
                        href="mailto:lchoo9294@gmail.com"
                        className="inherit__link"
                    >
                        <i className="fas fa-envelope footer__icon" />
                    </a>
                    <a
                        href="https://lcly.github.io/personalwebsite/"
                        className="inherit__link"
                    >
                        <i className="fas fa-globe footer__icon" />
                    </a>
                </div>

                <div className="footer__spacing">
                    <i className="far fa-copyright" /> 2019 Henry Choo. All
                    rights reserved.
                </div>
            </Container>
        </Segment>
    );
};

export default Footer;
