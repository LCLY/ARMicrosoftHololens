import React from "react";
import { Container, Dropdown, Menu } from "semantic-ui-react";
import ContainerComp from "./ContainerComp";
import Footer from "./Footer";
const Content = () => (
    <div>
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item as="a" href="#" header>
                    AR Cracks Detection
                </Menu.Item>
                <Menu.Item as="a" href="#">
                    Home
                </Menu.Item>

                <Dropdown item simple text="Dropdown">
                    <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Header Item</Dropdown.Header>
                        <Dropdown.Item>
                            <i className="dropdown icon" />
                            <span className="text">Submenu</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>

        <ContainerComp></ContainerComp>

        <Footer></Footer>
    </div>
);

export default Content;
