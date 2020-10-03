import React, {useEffect,useRef} from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Footer from '../Components/Footer.js';
import Teacher from '../images/teacher.png';
import '../styles/acercaDe.css';
import { gsap } from 'gsap/dist/gsap';

const AcercaDe = () =>{
    let mainTitle = useRef(null);
    let titleImg = useRef(null);
    let Text = useRef(null);

    function AboutAnimations(){
        let tl = gsap.timeline();
        let EaseProp = gsap.parseEase("back.out(1.7)");
        let Circ = gsap.parseEase("circ.out");
        tl
        .fromTo(mainTitle,{visibility:"hidden", opacity:0},{duration:2, delay:4, visibility:"visible", opacity:1, ease:EaseProp})
        .fromTo(titleImg,{visibility:"hidden", opacity:0},{visibility:"visible", opacity:1, ease:Circ, duration:2, delay:0.5})
        .fromTo(Text, {visibility:"hidden", opacity:0},{visibility:"visible", opacity:1, duration:1.5, delay:0.4})
    }
    useEffect(() =>{
        AboutAnimations();
    })

            return(
                <div className ="AboutContainer">
                    <NavigationBar />
                    <h1 className="main-title" id="name" ref={title => mainTitle = title}>Prof. Ignacio</h1>
                    <div className="prof-img">
                        <img src={Teacher} alt="Teacher icon" title="Teacher icon" id="teacher-icon" ref = {img => titleImg = img}/>
                    </div>
                    <div className="text-container" ref={TextEl => Text = TextEl}>
                        <p className="info intro">
                            Bienvenidos a mi sitio, me llamo Ignacio José Amador Bendaña.                    
                        </p> 
                        <p className="info intro">
                            Me gustaría ser tu profesor de inglés, ya que me encanta la docencia
                            y he observado que la biculturalidad
                            del idioma es muy útil en tu vida personal y laboral.
                            Dicho lo anterior,
                        </p>
                        <ul className="info skills">
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
export default AcercaDe;