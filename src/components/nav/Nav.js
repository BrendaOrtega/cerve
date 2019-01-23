import React, { Component } from 'react';
import './Nav.css';


class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <img src="http://cerveceriaallende.mx/wp-content/uploads/2015/04/logo.png" alt="logo_allende"/>
                <div className="menu">
                    <p>Cervezas</p>
                    <p>Puntos de Venta</p>
                    <p>Blog</p>
                    <p>Contacto</p>
                </div>
            </div>
        );
    }
}

export default Nav;