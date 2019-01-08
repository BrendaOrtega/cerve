import React, { Component } from 'react';
import './Home.css';

class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="cover">
                    <div>
                        <h3><span>#cerveceriaallende</span><span>#cervezamexicana</span> <span>#cervezaartesanal</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur blanditiis dicta dignissimos doloribus eos, facere, harum laboriosam magni minima nihil officiis pariatur repudiandae saepe sapiente, tenetur vitae voluptate voluptatem.</p>
                        <button className="btn_visit">Visitanos</button>
                    </div>
                    <div className="insta">
                        <div className="insta-post">

                        </div>
                        <div className="insta-post">

                        </div>
                        <div className="insta-post">

                        </div>
                        <div className="insta-post">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;