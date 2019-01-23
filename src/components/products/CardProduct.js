import React from 'react';
import './Products.css';
import FontAwesome from 'react-fontawesome';

export const CardProduct = () => {
    return (
        <div className="card-product">
            <div className="card_img">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41Q9WqJtbYL.jpg" alt="cerveza"/>
            </div>
            <div className="card_text">
                <h2>Allede Agave Lager</h2>
                <hr/>
                <p>Fermentación: Lager</p>
                <p>Alc. Vol.: 4.2%</p>
                <p>IBUS: 15</p>
                <p>Color: Color cobrizo, reminiscente del agave horneado, con veloces burbujas subiendo hacia la generosa espuma blanca.
                </p>
                <p>Aroma: El agave horneado se combina con las frutas tropicales del lúpulo y se perciben lichi, durazno y cítricos con un intrigante toque ahumado.
                </p>
                <p>Sabor: Cerveza única en su especie, sorprende por el balance y suavidad del ahumado caramelo del agave, combinado con frutas exóticas en un cuerpo ligero y refrescante.
                </p>
                <p>Tiempo de Elaboración: 21 Días
                </p>
                <p>Temperatura Recomendada: 6ºC
                </p>
                <p>Maridaje: Cualquier platillo ahumado pero de sabor suave, como salmón y quesos jóvenes. Otros platos delicados como pollo a las hierbas y mariscos crudos.
                </p>

                <p><strong>$ 99.00</strong></p>
                <br/>
                <button className="btn_visit">Comprar</button>
            </div>


        </div>
    )
};
