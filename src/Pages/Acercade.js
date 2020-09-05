import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Footer from '../Components/Footer.js';
import Teacher from '../images/teacher.png';
import '../styles/acercaDe.css';

class AcercaDe extends React.Component{
    render(){
            return(
                <div className ="container">
                    <NavigationBar />
                    <h1 className="main-title" id="name">Prof. Ignacio</h1>
                    <div className="prof-img">
                        <img src={Teacher} alt="Teacher icon" title="Teacher icon" id="teacher-icon"/>
                    </div>
                    <div className="text-container">
                        <p className="info">
                            Bienvenidos a mi sitio, me llamo Ignacio José Amador Bendaña.                    
                        </p>
                        <p className="info">
                            Me gustaría ser tu profesor de inglés como segunda lengua, ya que he observado que la biculturalidad que 
                            el idioma te permite obtener es muy útil en tu vida personal y laboral.
                            Dicho lo anterior,
                        </p>
                        <ul className="info">
                            <li className="info">Actualmente me desarrollo como docente de Inglés como segunda lengua.</li>
                            <li className="info">Interpreto & traduzco cartas y documentos legales.</li>
                            <li className="info">Tengo un diplomado en <b>Estrategias Metodológicas para la enseñanza del Idioma Inglés de Macmillan Education.</b></li>
                            <li className="info">Técnico especializado en la enseñanza del idioma inglés del <b>INATEC, MINED & UNAN.</b></li>
                            <li className="info">Me desempeñé como <b>Intérprete, traductor & guía turístico</b> en el <b>Aeropuerto Internacional Augusto C. Sandino.</b></li>
                        </ul>
                    </div>
                    <Footer />
                </div>
            );
    };
};
export default AcercaDe;