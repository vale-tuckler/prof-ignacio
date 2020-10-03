import React, {useState, useEffect, useRef} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import NavigationBar from '../Components/NavigationBar.js';
import Footer from '../Components/Footer.js';
import '../styles/infoServicios.css';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Power2 } from 'gsap';

const InfoServicios = () => {

    const  [isOpen, setIsOpen]  = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let MainTitle1 = useRef(null);
    let MainTitle2 = useRef(null);
    let classesTitle = useRef(null);
    let AbilitesTitle = useRef(null);
    let ReinTitle = useRef(null); // ReinTitle = Reinforcement Title
    let UntrackedTitle = useRef(null); // UnregTitle = Untracked Reinforcement Title
    let BenefitsTitle = useRef(null);
    let InterpreText = useRef(null);
    let ClassesText = useRef(null);
    let AbilitesText = useRef(null);    
    let ReinText = useRef(null); //ReinText = Reinforcement Text
    let  UntrackedText = useRef(null); //UntrackedText = Untracked Reinforcement Text
    let BenefitsText = useRef(null);
    let PricesTitle = useRef(null);

    
    function ServicesAnimations(){

        let Bounce = gsap.parseEase("bounce.out");
        let Circ = gsap.parseEase("circ.out");
       
        ScrollTrigger.create({
            trigger:MainTitle1,
            start:"top bottom",
        });
       ScrollTrigger.create({
            trigger:MainTitle2,
            start:"bottom top"        
        });

        ScrollTrigger.create({
            trigger:classesTitle,
            start:"bottom bottom"        
        })

        let titulos1 = [classesTitle, ClassesText];

        let myTL = gsap.timeline();
        myTL
            .fromTo(MainTitle1,
                {visibility:"hidden", opacity:0, yPercent:45},
                {visibility: "visible", duration:2, opacity:1, ease:Power2.easeOut, delay:4, yPercent:0})
            .fromTo(InterpreText,
                {visibility:"hidden", opacity:0, xPercent:20},
                {visibility:"visible", opacity:1, xPercent:0, ease:Power2.easeOut, duration:1.5, delay:0.5})
       //SECOND PART
            .fromTo(MainTitle2,
                {visibility:"hidden", opacity:0, yPercent:35},
                {visibility:"visible", duration:2, opacity:1, ease:Bounce, delay:1.5, yPercent:0})        
            .fromTo(titulos1, 
                {visibility:"hidden", opacity:0, yPercent:-28}, 
                {visibility:"visible", opacity:1, duration:2, ease:Circ, delay:1, yPercent:0})
            .fromTo([AbilitesTitle, AbilitesText],  
                {visibility:"hidden", opacity:0, yPercent:-25}, 
                {visibility:"visible", opacity:1, duration:1.5, ease:Power2.easeIn, delay:0.5, yPercent:0})                    
            .fromTo([ReinTitle, ReinText], 
                {visibility:"hidden", opacity:0, yPercent:25}, 
                {visibility:"visible", opacity:1, duration:1, ease:Power2.easeInOut, delay:1, yPercent:0})
        //THIRD PART 
            .fromTo([UntrackedTitle, UntrackedText], 
                {visibility:"hidden", opacity:0, xPercent:25}, 
                {visibility:"visible", opacity:1, duration:1.8, ease:Circ, delay:1, xPercent:0})
            .fromTo([BenefitsTitle,BenefitsText], 
                {visibility:"hidden", opacity:0, yPercent:20}, 
                {visibility:"visible", opacity:1, duration:1.8, ease:Circ, delay:1, yPercent:0, yPercent:0})                
        
        //FOURTH PART
            .fromTo(PricesTitle, 
                {visibility:"hidden", opacity:0}, 
                {visibility:"visible", opacity:1, duration:1.5, delay:0.6, scrollTrigger:{trigger:PricesTitle, start:"bottom bottom"}});                                                                

            return myTL;                
    }

    useEffect(()=>{
        ServicesAnimations();
    });

    return(
        <div className="info-body">
            <NavigationBar/>
            <h1 className="main-title" ref={e => MainTitle1 = e}>Interpretación y traducción general</h1>
           <section>
                <ul className="documents-list" ref={t => InterpreText = t}>
                    <li>Traducción de cartas.</li>
                    <li>Traducción de documentos ordinarios.</li>
                    <li>Traducción de documentos legales.</li>
                    <li>Servicios de interpretación a extranjeros y no extranjeros.</li>
                    <li>Servicios de interpretación a personas jurídicas (empresas).</li>
                </ul>
           </section> 
            <br/>
            <h1 className="main-title" ref={e => MainTitle2 = e}>Clases particulares y reforzamientos</h1>
            <section>
                <h2 className="secondary-title" ref={t => classesTitle = t}>Clases personalizadas</h2>
                <p className="texto" ref={textEl => ClassesText = textEl}>  
                    Se registra el progreso del alumno a través de las 5 habilidades disponibles del idioma y se genera un horario adaptado a cada alumno.
                    Incluye videollamadas para practicar la habilidad del habla/conversación y la escucha activa.
                </p>
            </section>
            <section>
                <h2 className="secondary-title" ref={a => AbilitesTitle = a}>Habilidades disponibles</h2>
                <ul className="documents-list" ref={t => AbilitesText = t}> 
                    <li>Gramática</li>
                    <li>Habla/Conversación</li>
                    <li>Redacción</li>
                    <li>Escucha activa</li>
                    <li>Comprensión lectora</li>
                </ul>
            </section>
            <section id ="reforzamientos">
                <h2 className="secondary-title" ref={rel => ReinTitle = rel}>Reforzamientos con registro</h2>
                <p className="texto" ref={elem => ReinText = elem}>
                    Estos reforzamientos pueden cubrir todos los temas o algunos temas relacionados a
                    las habilidades antes mencionadas, además de registrar el progreso del alumno en
                    su proceso de aprendizaje. Incluye videollamadas.
                </p>

                <h2 className="secondary-title" ref={el => UntrackedTitle = el}>Reforzamientos sin registro</h2>
                <p className="texto" ref={el => UntrackedText = el}>
                    Incluyen un tema en específico por sesión, puede ser un tema relacionado a cualquier habilidad
                    del idioma. No incluye videollamadas ni registro de progreso.
                </p>
            </section>
            <section>
                <h2 className="secondary-title" ref={b => BenefitsTitle = b}>Beneficios adicionales</h2>
                <ul className="beneficios" ref={belem => BenefitsText = belem}>
                    <li>Flexibilidad del método de enseñanza.</li>
                    <li>Es posible trabajar casi con cualquier presupuesto.</li>
                    <li>Trato amable y cordial.</li>
                    <li>Te ofrecemos un vasito de agua cuando llegués.</li>
                </ul>
            </section>
                            
                        {/* PRICES SECTION*/ }

            <div className="price-container">
            <Button color="btn btn-outline-success" onClick={toggle} style={{ marginBottom: '1rem' }} id="prices">Ver precios</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>                        
                            <h1 className="main-title" ref={elem => PricesTitle = elem}>Precios</h1>
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

