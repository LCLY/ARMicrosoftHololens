import React from "react";
import { Container, Menu } from "semantic-ui-react";

class HiddenNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            iconName: "fa-bars",
        };
    }

    handleClick = () => {
        //if show, then the icon is times
        if (this.state.show === false) {
            console.log("COME IN");
            this.setState({ iconName: "fa-times", show: true });
        } else {
            console.log("COME OUT");
            this.setState({ iconName: "fa-bars", show: false });
        }
    };

    render() {
        return (
            <div className="navbar--hidden">
                <Menu fixed="top" inverted>
                    <Container>
                        <div className="hidden--outerContainer">
                            <div className="hidden__top">
                                <div className="hidden__home" href="#">
                                    AR Cracks detection
                                </div>
                                <div className="hidden__icon__div">
                                    <i
                                        className={`fas ${this.state.iconName} hidden__icon`}
                                        onClick={this.handleClick}
                                    />
                                </div>
                            </div>
                            <div className="hidden__items">
                                <a className="hidden__text" href="#">
                                    Home
                                </a>
                            </div>
                            <div className="hidden__items">
                                <a className="hidden__text" href="#demoVideo">
                                    Demo
                                </a>
                            </div>
                            <div className="hidden__items">
                                <a className="hidden__text" href="#documentDiv">
                                    Documentation
                                </a>
                            </div>
                            <div className="hidden__items">
                                <a className="hidden__text" href="#footerDiv">
                                    Other links
                                </a>
                            </div>
                        </div>
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default HiddenNavbar;
