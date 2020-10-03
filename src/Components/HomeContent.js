import React, { useEffect, useRef }from 'react';
import { Power3, Power1 } from 'gsap/dist/gsap';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/inicio.css';    

gsap.registerPlugin(ScrollTrigger);

const HomeCard = props =>{        
        
        let ImgRef = useRef(null);
        let Img2 = useRef(null);
        let colorEl = useRef(null); //colorEl means Color Element
        let Banner1 = useRef(null); //Banner makes reference to the phrase at the beginning of #section4 which is above the flag
        let Banner2 = useRef(null);

        function HomeAnimation(){

           console.log("After"+"\nBanner 1 = " + Banner1 + " \nBanner 2 = "+ Banner2);         

            let Bounce = gsap.parseEase("bounce.out");
            let Circ = gsap.parseEase("circ.out");

            let mytimeline = gsap.timeline({delay:2});
            mytimeline
            .fromTo([ImgRef.current, Img2.current],
                {opacity:0, xPercent:-8, visibility:"hidden"},
                {duration:2, visibility:"visible", opacity:1, xPercent:0, ease:Power3.easeInOut, scrollTrigger:{start:ImgRef, start:"top bottom"}})
            .fromTo(colorEl.current,
                {opacity:0, xPercent:8, visibility:"hidden"},
                {duration:1.5, visibility:"visible",opacity:1,xPercent:0, ease:Power3.easeOut})
            .fromTo(Banner1.current,
                {opacity:0, yPercent:12, visibility:"hidden"},
                {duration:1.5, visibility:"visible",opacity:1,yPercent:0, ease:Bounce})
            .fromTo(Banner2.current,
                {opacity:0, xPercent:12, visibility:"hidden"},
                {duration:1.5, visibility:"visible", opacity:1, xPercent:0, ease:Circ})
                
                return mytimeline;
        }
        
        useEffect(() => {                                      
            HomeAnimation();
        });


        if(props.sectionID === "section4"){
            return(
                <div className="Homecontainer">                
            <section id={props.sectionID}>
                    <div className="phrase4" id = "phrase-container">
                            <p className="banner" ref = {el => Banner1 = el}>{props.text1}</p>                            
                            <p className="banner"ref = {el => Banner2 = el}> {props.text2}</p>                            

                            <img src = {props.image} alt ={props.alt} title={props.title} ref={i => Img2 = i} id="flags"/>
                            <aside className="left">                            
                                <img src={props.Star} alt="Estrella" title="Estrella" className="izq" id="izq1"/>
                                <img src={props.Star} alt="Estrella" title="Estrella" className="izq" id="izq2"/>
                                <img src={props.Star} alt="Estrella" title="Estrella" className="izq" id="izq3"/>
                            </aside>
                            <aside className="right">                            
                                <img src={props.Star} alt="Estrella" title="Estrella" className="der" id="der1"/>
                                <img src={props.Star} alt="Estrella" title="Estrella" className="der" id="der2"/>
                                <img src={props.Star} alt="Estrella" title="Estrella" className="der" id="der3"/>
                            </aside>
                            <aside>
                                <img src={props.libertyStatue} alt="Statue of Liberty" title="Estatua de la Libertad" id="free"/>
                                <img src={props.LondonClock} alt="Big Ben of London" title="Big Ben de Londres" id="bigben"/>
                            </aside>
                    </div>                                            
            </section>      
        </div>

            );
        }


    return(
        <div className="Homecontainer">                
            <section id={props.sectionID}>
                    <div className="section-image">
                        <img src = {props.image} alt ={props.alt} title={props.title} ref={i => ImgRef = i}/>
                    </div>
                    <div className="phrase">
                        <aside ref= {c => colorEl = c} id={props.asideID}>                            
                            <p className="text">{props.text1}</p>                            
                            <p className="text"> {props.text2}</p>
                        </aside>
                    </div>
            </section>      
        </div>
    );
}
    
export default HomeCard;









