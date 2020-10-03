import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Footer from '../Components/Footer.js';
import Background from '../images/books.jpg';
import Background2 from '../images/whiteboard.jpg';
import '../styles/servicios.css';
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { Power3 } from 'gsap';
import { useRef, useEffect } from 'react';
//gsap.registerPlugin(ScrollTrigger);

const Servicios = () => {   

        let titleEl = useRef(null);
        let interpretationEl = useRef(null);
        let  reinforcement = useRef(null);

        function ServicesAnimation(){
                let Mytl = gsap.timeline({
                    scrollTrigger:{
                        trigger:titleEl,                        
                        start:"bottom bottom",
                        markers:{
                            startColor:"red",
                            endColor:"green",
                            fontSize: "17px"
                        }                        
                    },
                    delay:0.6
                });
                Mytl
                .fromTo(titleEl,{visibility:"hidden", opacity:0, yPercent:10},{visibility:"visible", opacity:1, ease:Power3.easeOut, yPercent:0, duration:2, delay:4})
                .fromTo(interpretationEl, {visibility:"hidden", opacity:0, xPercent:-50},{ visibility:"visible", opacity:1, xPercent:0, delay:1.5, duration:1.5})
                .fromTo(reinforcement, {visibility:"hidden", opacity:0, xPercent:50},{visibility:"visible", opacity:1, xPercent:0, delay:2, duration:1.5})
        }

        useEffect(()=>{
            ServicesAnimation();
        })
        return(
            <div className="ServicesContainer">
                <NavigationBar />                
                    
                    <h1 className="main-title" ref={el => titleEl = el}>SERVICIOS</h1>     

                <div className="interpretacion traduccion" ref={elem => interpretationEl = elem}>
                    <img src={Background} alt="Fondo con libros" title="Libros" className="background"/>
                    <a href="/info-servicios" id="link1">
                        <ul className="box1">
                            <li className="text1">Interpretación</li>
                            <li className="text1">Y</li>
                            <li className="text1">Traducción general</li>
                        </ul> 
                    </a>                   
                </div>        
                <div className="clases reforzamientos" ref={elem => reinforcement = elem}>
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
export default Servicios;