import React from 'react';
import Nav from 'react-bootstrap/Nav';
import icono from '../images/pencil.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/NavigationBar.css';

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state = {key:"link-inicio"}
    }
    render(){
        return(
            <nav className="bg-dark container">
                <Nav justify variant="tabs" id="navigation-bar" className="bg-dark">                        
                    <Nav.Item className="NavItem">
                        <Nav.Link  eventKey="link-inicio" href="/inicio">
                            <img src={icono} alt="icono" title="ícono" id="icono-nav"/>
                        </Nav.Link>
                    </Nav.Item>                                                                              
                    <Nav.Item className="NavItem">
                        <Nav.Link eventKey="link-servicios" href="/servicios" className="NavLink">
                            Servicios
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link eventKey="link-acerca" href="/acerca-de" className="NavLink">
                            Acerca de
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="NavItem">
                        <Nav.Link eventKey="link-contacto" href="/contacto" className="NavLink">
                            Contacto
                        </Nav.Link>
                    </Nav.Item>                            
            </Nav>
            </nav>
        );
    };
}

export default Navigation;
