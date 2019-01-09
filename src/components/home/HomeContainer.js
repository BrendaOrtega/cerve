import React, { Component } from 'react';
import './Home.css';
import Nav from "../nav/Nav";
import Slide from "./Slide";
import Banner from "./Banner";
import History from "./History";
import Preview from "./Preview";


class HomeContainer extends Component {

    render() {
        return (
            <div>
               <Nav/>
                <Slide/>
                <History/>
                <Banner/>
                <Preview/>

            </div>
        );
    }
}

export default HomeContainer;