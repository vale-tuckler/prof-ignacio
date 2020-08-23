import React from 'react';
import Facebook from '../images/fb.png';
import Mail from '../images/mail.png';
import Instagram from '../images/instagram.png';
import Whatsapp from '../images/whatsapp.png';
import '../styles/footer.css';

const Footer = () =>{
    return(
        <div id="container">
           <div id="prof-name">
               &copy;Prof. Ignacio
           </div>
           <div id="social-media">
                <a href=""><img src={Facebook} alt="Facebook logo" title="Facebook" /></a>
                <a href=""><img src={Instagram} alt="Instagram logo" title="Instagram" /></a>
                <a href=""><img src={Whatsapp} alt="Whatsapp icon" title="Whatsapp" /></a>
                <a href=""><img src={Mail} alt="Mail icon" title="Mail" /></a>
           </div>
        </div>
    );
}
export default Footer;