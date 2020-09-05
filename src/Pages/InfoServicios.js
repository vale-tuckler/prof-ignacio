import React, {useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import NavigationBar from '../Components/NavigationBar.js';
import Footer from '../Components/Footer.js';
import '../styles/infoServicios.css';
/*import Button from '../Components/PriceButton.js';*/

const InfoServicios = () => {
    const  [isOpen, setIsOpen]  = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="info-body">
            <NavigationBar/>
            <h1 className="main-title">Interpretación y traducción general</h1>
           <section>
                <ul className="documents-list">
                    <li>Traducción de cartas.</li>
                    <li>Traducción de documentos ordinarios.</li>
                    <li>Traducción de documentos legales.</li>
                    <li>Servicios de interpretación a extranjeros y no extranjeros.</li>
                    <li>Servicios de interpretación a personas jurídicas (empresas).</li>
                </ul>
           </section> 
            <br/>
            <h1 className="main-title">Clases particulares y reforzamientos</h1>
            <section>
                <h2 className="secondary-title">Clases personalizadas</h2>
                <p className="texto">
                    Se registra el progreso del alumno a través de las 5 habilidades disponibles del idioma y se genera un horario adaptado a cada alumno.
                    Incluye videollamadas para practicar la habilidad del habla/conversación y la escucha activa.
                </p>
            </section>
            <section>
                <h2 className="secondary-title">Habilidades disponibles</h2>
                <ul className="documents-list">
                    <li>Gramática</li>
                    <li>Habla/Conversación</li>
                    <li>Redacción</li>
                    <li>Escucha activa</li>
                    <li>Comprensión lectora</li>
                </ul>
            </section>
            <section id ="reforzamientos">
                <h2 className="secondary-title">Reforzamientos con registro</h2>
                <p className="texto">
                    Estos reforzamientos pueden cubrir todos los temas o algunos temas relacionados a
                    las habilidades antes mencionadas, además de registrar el progreso del alumno en
                    su proceso de aprendizaje. Incluye videollamadas.
                </p>

                <h2 className="secondary-title">Reforzamientos sin registro</h2>
                <p className="texto">
                    Incluyen un tema en específico por sesión, puede ser un tema relacionado a cualquier habilidad
                    del idioma. No incluye videollamadas ni registro de progreso.
                </p>
            </section>
            <section>
                <h2 className="secondary-title">Beneficios adicionales</h2>
                <ul className="beneficios">
                    <li>Flexibilidad del método de enseñanza.</li>
                    <li>Es posible trabajar casi con cualquier presupuesto.</li>
                    <li>Trato amable y cordial.</li>
                    <li>Te ofrecemos un vasito de agua cuando llegués.</li>
                </ul>
            </section>
                            
                        {/* PRICES SECTION*/ }

            <div className="price-container">
            <Button color="btn btn-outline-danger" onClick={toggle} style={{ marginBottom: '1rem' }} id="prices">Ver precios</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>                        
                            <h1 className="main-title">Precios</h1>
                            <section className="services-list">
                                <h2 className="secondary-title">Clases personalizadas</h2>
                                <p className="texto">
                                 C$200 por hora.    
                                </p>
                            </section>
                            <section className="services-list">
                                <h2 className="secondary-title">Servicio de traducción (cartas, ensayos, etc.)</h2>
                                <p className="texto">
                                A partir de US$5 o US$10
                                </p>
                            </section>
                            <section className="services-list">
                                <h2 className="secondary-title">Servicios de interpretación (extranjeros, nacionales & empresas)</h2>
                                <p className="texto">
                                    De US$30 a US$50.
                                </p>
                            </section>                            
                            <section className="services-list">
                                <h2 className="secondary-title">Reforzamientos con registro.</h2>
                                <p className="texto">
                                C$150 por hora.
                                </p>
                            </section>
                            <section className="services-list">
                                <h2 className="secondary-title">Reforzamientos sin registro.</h2>
                                <p className="texto">
                                C$100 por hora.
                                </p>
                            </section>
                            
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <Footer/>
        </div>
    );
}
export default InfoServicios;

