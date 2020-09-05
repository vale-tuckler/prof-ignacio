import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Footer from '../Components/Footer.js';
import InfoServicios from './InfoServicios.js';
import Background from '../images/books.jpg';
import Background2 from '../images/whiteboard.jpg';
import '../styles/servicios.css';

class Servicios extends React.Component{
    render(){
        return(
            <div className="container">
                <NavigationBar />
                <h1 className="main-title">SERVICIOS</h1>

                <div className="interpretacion traduccion">
                    <img src={Background} alt="Fondo con libros" title="Libros" className="background"/>
                    <a href="/info-servicios" id="link1">
                        <ul className="box1">
                            <li className="text1">Interpretación</li>
                            <li className="text1">Y</li>
                            <li className="text1">Traducción general</li>
                        </ul> 
                    </a>                   
                </div>        
                <div className="clases reforzamientos">
                    <img src={Background2} alt="Whiteboard image" title="Whiteboard" className="background2"/>
                    <a href="/info-servicios" id="link2">
                        <ul className="box2">
                            <li className="text2">Clases particulares</li>
                            <li className="text2">Y</li>
                            <li className="text2">Reforzamientos</li>
                        </ul>
                    </a>
                </div>        
            <Footer />  
            </div>
        );
    }
}
export default Servicios;