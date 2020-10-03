import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Power2 } from 'gsap';
import Nav from 'react-bootstrap/Nav';
import icono from '../images/pencil.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/NavigationBar.css';

const Navigation = () => {

        let navBar = useRef(null);
        let navLogo = useRef(null);
        let navItem1 = useRef(null);
        let navItem2 = useRef(null);
        let navItem3 = useRef(null);
        let navLink1 = useRef(null);        
        let navLink2 = useRef(null);        
        let navLink3 = useRef(null);        
        let navLink4 = useRef(null);
    
    const NavAnimation = () => {        
        //console.log([navBar, navItem, navLink]);

        let myTimeline = gsap.timeline({delay:0});
        
        myTimeline
        .fromTo([navBar,navLogo],{visibility:"hidden", opacity:0},{visibility:"visible", opacity:1, duration:1, ease: Power2.easeIn, stagger:0.10})
        .fromTo([navLink1,navLink2, navLink3, navLink4,navItem1, navItem2, navItem3],
                {visibility:"hidden", opacity:0, yPercent:10}, 
                {visibility:"visible", opacity:1, duration:0.8, yPercent:0, stagger:0.26, ease: Power2.easeIn})
        //.fromTo(navBar, {visibility:"hidden", opacity:0, yPercent:8},{visibility:"visible", opacity:1, duration:1.5, ease: Power2.easeIn, stagger:0.35, yPercent:0})
        //.fromTo([navLink,navItem], {visibility:"hidden", opacity:0, yPercent:10}, {visibility:"visible", opacity:1, duration:0.8, yPercent:0, stagger:0.35, ease: Power2.easeIn})
        //.fromTo(navLink, {opacity:0, visibility:"hidden", yPercent:-8}, {duration:1.8, visibility:"visible", opacity:1, yPercent:0});
             
    }
    useEffect(() => {     
        NavAnimation();
    },[]);
    
    return(
        <nav className="bg-dark container navigation-element" ref={ navEl => navBar = navEl} id="navBarContainer">
                <Nav 
                    justify variant="tabs" 
                    id="navigation-bar" 
                    className="bg-dark"
                    ref = {elem => navBar = elem}     
                >                        
                    <Nav.Item 
                        className="NavItem"
                        ref = {el =>{navLogo = el}}                        
                    >   
                        <Nav.Link  
                            eventKey="link-inicio" 
                            href="/inicio"
                            ref = {el =>{navLink1 = el}}
                            id="apple"
                        >
                            <img src={icono} alt="icono" title="ícono" id="icono-nav"/>
                        </Nav.Link>
                    </Nav.Item>                                                                              
                    <Nav.Item 
                        className="NavItem"
                        ref = {elem => navItem1 = elem}
                        id="services"
                    >
                        <Nav.Link 
                            eventKey="link-servicios" 
                            href="/servicios" 
                            className="NavLink"
                            ref = {elem => navLink2 = elem}
                        >
                            Servicios
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item 
                        className="NavItem"
                        ref = { el => navItem2 = el}
                        id="about"
                    >
                        <Nav.Link 
                            eventKey="link-acerca" 
                            href="/acerca-de" 
                            className="NavLink"
                            ref = {El => navLink3 = El}                            
                        >
                            Acerca de
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item 
                        className="NavItem"
                        ref = {elem => navItem3 = elem}
                        id="contact"
                    >
                        <Nav.Link 
                            eventKey="link-contacto" 
                            href="/contacto" 
                            className="NavLink"
                            ref = {element => navLink4 = element}                            
                        >
                            Contacto
                        </Nav.Link>
                    </Nav.Item>                            
            </Nav>
        </nav>
    );
}
        
export default Navigation;
