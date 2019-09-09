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
        >
            <Container textAlign="center">
                <Grid divided inverted stackable>
                    <Grid.Column width={7} style={{ textAlign: "left" }}>
                        <Header inverted as="h4" content="Reference links" />
                        <List link inverted>
                            <List.Item
                                as="a"
                                href="https://www.sciencedirect.com/science/article/pii/S2351978918300222"
                                target="_blank"
                            >
                                Aviation inspection and maintenance
                            </List.Item>
                            <List.Item
                                as="a"
                                href="http://papers.cumincad.org/data/works/att/caadria2014_161.content.pdf"
                                target="_blank"
                            >
                                VR experiment human building interaction
                            </List.Item>
                            <List.Item
                                as="a"
                                target="_blank"
                                href="https://www.researchgate.net/post/How_can_AR_VR_help_advance_the_AEC_industry_research_and_practice"
                            >
                                AR/VR AEC industry research/practice practice
                            </List.Item>
                            <List.Item
                                as="a"
                                target="_blank"
                                href="https://www.researchgate.net/post/How_can_AR_VR_help_advance_the_AEC_industry_research_and_practice"
                            >
                                Augmented Reality in built environment
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header
                            inverted
                            as="h4"
                            content="Other VR/AR related personal projects"
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
                    <a href="https://github.com/LCLY" className="inherit__link">
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
