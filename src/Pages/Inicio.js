import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Map from '../images/map.jpg';
import mexicoImg from '../images/mexico.jpg';
import Avion from '../images/avion-dentro.jpg';
import Footer from '../Components/Footer.js';
import Flags from '../images/usuk.jpg';
import Star from '../images/star.png';
import Free from '../images/free.png';
import BigBen from '../images/bigben.png';
import '../styles/inicio.css';
import '../Animations/homeAnimation.js';

const Home = () =>{
    return(
        <div className="container">
            <NavigationBar />
            <section id="section1">
                <div className="section-image">
                    <img src = {Map} alt ="Edificio" title="Photo by Aksonsat Uanthoeng from Pexels"/>
                </div>
                <div className="phrase">
                    <aside id="phrase1">
                        <p className="text">Encontrá</p>                            
                        <p className="text"> Nuevas oportunidades</p>
                    </aside>
                </div>
            </section>
            <section id="section2">
                <div className="section-image">
                    <img src={mexicoImg} alt="Chichén-Itzá en méxico" title="Photo by Alex Azabache from Pexels"/>   
                </div>            
                <div className="phrase">
                    <aside id="phrase2">
                            <p className="text">Explorá otra cultura,</p>
                            <p className="text">aprendé nuevas cosas.</p>
                    </aside>
                </div>
            </section> 
            <section id="section3">
                <div className="section-image">
                    <img src={Avion} alt="Asientos de un avión" title="Asientos de un avión"/>
                </div>
                <div className="phrase">
                    <aside id="phrase3">
                        <p className="text">Salí adelante e</p>
                        <p className="text">impulsá tu carrera</p>
                    </aside>                                            
                </div>                                            
            </section> 
            <section id="section4">
                <div className="phrase4" id="phrase-container">
                    <p className="banner">
                        Aprendé
                    </p>
                    <p className="banner">
                        Inglés
                    </p>
                    <img src={Flags} alt="UK flag, US flag" title="Flag of the UK and US combined"id="flags"/>

                    <aside className="left">
                        <img src={Star} alt="Estrella" title="Estrella" className="izq" id="izq1"/>
                        <img src={Star} alt="Estrella" title="Estrella" className="izq" id="izq2"/>
                        <img src={Star} alt="Estrella" title="Estrella" className="izq" id="izq3"/>
                    </aside>
                    <aside className="right">
                    <img src={Star} alt="Estrella" title="Estrella" className="der" id="der1"/>
                    <img src={Star} alt="Estrella" title="Estrella" className="der" id="der2"/>
                    <img src={Star} alt="Estrella" title="Estrella" className="der" id="der3"/>
                    </aside>
                    <img src={Free} alt="Statue of Liberty" title="Estatua de la Libertad" id="free"/>
                    <img src={BigBen} alt="Big Ben of London" title="Big Ben de Londres" id="bigben"/>
                </div>
            </section>
            <Footer />             
        </div>
    );
}
export default Home;