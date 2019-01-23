import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class Slide extends Component {

    render() {
        return (
            <div className="slide">
                <div className="back">
                    <FontAwesome name="angle-down" />
                </div>
            </div>
        );
    }
}

export default Slide;