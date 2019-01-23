import React, { Component } from 'react';
import './Home.css';
import Nav from "../nav/Nav";
import Slide from "./Slide";
import Banner from "./Banner";
import History from "./History";
import Preview from "./Preview";
import {CardProduct} from "../products/CardProduct";
import { Carousel } from 'antd';


class HomeContainer extends Component {

    render() {
        return (
            <div>
               <Nav/>
                <Slide/>
                <History/>

                <Banner/>
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="center: true">

                    <ul className="uk-slider-items uk-grid">
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                               <CardProduct/>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div className="uk-panel">
                                <CardProduct/>
                            </div>
                        </li>
                        <li className="uk-width-3-4">
                            <div>  <CardProduct/>
                            </div>
                        </li>

                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                       uk-slidenav-previous uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                       uk-slider-item="next"></a>

                </div>


            </div>
        );
    }
}

export default HomeContainer;