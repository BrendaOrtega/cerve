import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div>
                    <h3>Cervecería Allende</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consequatur consequuntur deleniti dolore, enim error excepturi laborum magnam, mollitia nobis nostrum odit perferendis perspiciatis quibusdam quo repellat sed similique temporibus. </p>
                </div>
                <div>
                    <h3>Ayuda</h3>
                    <p>Preguntas Frecuentes</p>
                    <p>Contacto</p>
                </div>
                <div>
                    <h3>Síguenos en</h3>
                    <FontAwesome name="facebook-f"/>
                    <FontAwesome name="twitter"/>
                </div>
            </div>
        );
    }
}

export default Footer;