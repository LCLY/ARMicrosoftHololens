import React from "react";
import { Container, Menu } from "semantic-ui-react";
const Navbar = () => {
    return (
        <Menu fixed="top" inverted className="navbar--desktop">
            <Container>
                <Menu.Item as="a" href="#" header>
                    AR Cracks Detection
                </Menu.Item>
                <Menu.Item as="a" href="#">
                    Home
                </Menu.Item>
                <Menu.Item as="a" href="#demoVideo">
                    Demo
                </Menu.Item>
                <Menu.Item as="a" href="#documentDiv">
                    Documentation
                </Menu.Item>
                <Menu.Item as="a" href="#footerDiv">
                    Other links
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default Navbar;
