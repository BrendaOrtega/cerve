import React, { Component } from 'react';
import './Home.css';
import Nav from "../nav/Nav";
import Slide from "./Slide";
import Banner from "./Banner";
import History from "./History";


class HomeContainer extends Component {

    render() {
        return (
            <div>
               <Nav/>
                <Slide/>
                <History/>
                <Banner/>

            </div>
        );
    }
}

export default HomeContainer;