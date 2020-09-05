import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Facebook from '../images/fb.png';
import Mail from '../images/mail.png';
import Instagram from '../images/instagram.png';
import Whatsapp from '../images/whatsapp.png';
import Tools from '../images/tools.png';
import '../styles/contacto.css';

class Contacto extends React.Component{
    render(){
        return(
            <div className="container">
                <NavigationBar />
                <aside className="aside-left">
                    <div className="phrase-container">
                        <h1 className="title-phrase">
                            Dejame enseñarte cosas útiles
                        </h1>
                    </div>
                    <div className="tools-image">
                        <img src={Tools} alt="Tools png icon" title="Tools icon" id="tools" />
                    </div>
                </aside>
                <aside className="social-media">
                    <div className="links">
                        <a href=""><img src={Facebook} alt="Facebook" title="Facebook" className="SM-link"/></a>
                        <a href=""><img src={Instagram} alt="Instagram" title="Instagram" className="SM-link"/></a>
                        <a href=""><img src={Whatsapp} alt="Whatsapp" title="Whatsapp" className="SM-link"/></a>
                        <a href=""><img src={Mail} alt="Mail" title="Mail" className="SM-link"/></a>
                    </div>
                </aside>
                <div className="bottom-phrase">
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
};
export default Contacto;