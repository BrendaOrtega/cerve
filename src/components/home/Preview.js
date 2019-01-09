import React, { Component } from 'react';
import './Home.css';
import {CardBlog} from "../blog/CardBlog";

class Preview extends Component {

    render() {
        return (
            <div className="preview">
                <h2>Voz Allende</h2>
                <div className="fl">
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                </div>
            </div>
        );
    }
}

export default Preview;