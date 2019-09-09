import React from "react";

import ContainerComp from "./ContainerComp";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import HiddenNavbar from "./Navbar/HiddenNavbar";
const Content = () => (
    <div>
        <Navbar />
        <HiddenNavbar />
        <ContainerComp />
        <Footer></Footer>
    </div>
);

export default Content;
