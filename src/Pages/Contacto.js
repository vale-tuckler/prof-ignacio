import React, {useEffect, useRef} from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Facebook from '../images/fb.png';
import Mail from '../images/mail.png';
import Instagram from '../images/instagram.png';
import Whatsapp from '../images/whatsapp.png';
import Tools from '../images/tools.png';
import '../styles/contacto.css';
import { gsap } from 'gsap';
import { Power4 } from 'gsap';
import { ScrollTrigger }from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contacto = () => {
    let phrase = useRef(null);
    let img = useRef(null);
    let fb = useRef(null);
    let ig = useRef(null);
    let wp = useRef(null);
    let mail = useRef(null);
    let bottomPhrase = useRef(null);
    /* ScrollTrigger.create({
        trigger:bottomPhrase,
        start:"bottom bottom",
        markers:{
            starColor:"green",
            endColor:"purple"
        }
    });*/

    const ContactAnimations = () =>{
        let mytl = gsap.timeline({delay:4});
        let Circ = gsap.parseEase("circ.out");
        let Back = gsap.parseEase("back.out(1.7)");
        mytl
            .from(phrase,{xPercent:25, opacity:0, ease:Circ})
            .fromTo(img,{visibility:"hidden", opacity:0, rotation:65},{duration:1.5,opacity:1,visibility:"visible", rotation:0, delay:1})
            .fromTo([fb ,ig, wp, mail],{visibility:"hidden",opacity:0, xPercent:-35}, { visibility:"visible", opacity:1,duration:2.8,delay:1, ease:Back, stagger:0.4, xPercent:0 })
            .fromTo(bottomPhrase,{visibility:"hidden", opacity:0},{ duration:1.5, visibility:"visible", opacity:1, ease:Power4.easeOut, delay:1, scrollTrigger:{trigger:bottomPhrase, start:"bottom bottom"}})
        return mytl;
    }
    useEffect(()=>{
        ContactAnimations();
    })
        return(
            <div className="ContactContainer">
                <NavigationBar />
                <aside className="aside-left">
                    <div className="phrase-container">
                        <h1 className="title-phrase" ref={t => phrase = t}>
                            Dejame enseñarte cosas útiles
                        </h1>
                    </div>
                    <div className="tools-image">
                        <img src={Tools} alt="Tools png icon" title="Tools icon" id="tools" ref={PImage => img = PImage}/>
                    </div>
                </aside>
                <aside className="social-media">
                    <div className="links">
                        <a href=""><img src={Facebook} alt="Facebook" title="Facebook" className="SM-link" ref={face => fb = face}/></a>
                        <a href=""><img src={Instagram} alt="Instagram" title="Instagram" className="SM-link" ref={I => ig = I}/></a>
                        <a href=""><img src={Whatsapp} alt="Whatsapp" title="Whatsapp" className="SM-link" ref={w => wp = w}/></a>
                        <a href=""><img src={Mail} alt="Mail" title="Mail" className="SM-link" ref={m => mail = m}/></a>
                    </div>
                </aside>
                <div className="bottom-phrase" ref={bottom => bottomPhrase = bottom}>
                    <h1 className="title">Números de teléfono</h1>
                    <p className="phone-number">
                        5775 - 0102 (Claro)
                    </p>
                    <p className="phone-number">
                        7812 - 8454 (Movistar)
                    </p>
                </div>
            </div>
        );
};
export default Contacto;