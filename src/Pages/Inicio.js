import React from 'react';
import Map from '../images/map.jpg';
import mexicoImg from '../images/mexico.jpg';
import Avion from '../images/avion-dentro.jpg';
import Flags from '../images/usuk.jpg';
import Star from '../images/star.png';
import libertyStatue from '../images/free.png';
import BigBen from '../images/bigben.png';
import '../styles/inicio.css';
import HomeContent from '../Components/HomeContent.js';
import NavBar from '../Components/NavigationBar.js';
import Footer from '../Components/Footer.js';

const HomeAnimated = () =>{

    //PROPS:
    //sectionID
    //imgDIV
    //image
    //alt
    //title
    //textClassname
    //asideID
    //text1, text2, text3, text4, text5, text6

    return(
      <div>
        <NavBar />
          <HomeContent 
          sectionID = "section1"            
          image = {Map}
          alt="Edificio"
          title="Photo by Aksonsat Uanthoeng from Pexels"
          asideID="phrase1"
          text1 ="Encontrá"
          text2 = "Nuevas Oportunidades"
        />

        <HomeContent 
          sectionID = "section2"  
          image = {mexicoImg}
          alt="Chichén-Itzá en méxico"
          title="Photo by Alex Azabache from Pexels"          
          asideID="phrase2"
          text1 ="Explorá otra cultura,"
          text2 = "Aprendé nuevas cosas"
        />

        <HomeContent 
          sectionID ="section3"
          image = {Avion}
          alt="Avión"
          title="Asientos de un avión"
          asideID ="phrase3"
          text1 = "Salí adelante e"
          text2="Impulsá tu carrera"
        />
        <HomeContent 
          sectionID="section4"
          image = {Flags}
          alt ="Banderas de los Estados Unidos y del Reino Unido"
          title="Banderas Reino Unido Estados Unidos"
          text1="Aprendé"
          text2="Inglés"
          Star = {Star}
          libertyStatue = {libertyStatue}
          LondonClock = {BigBen}

        />
        <Footer />
      </div>
    );
}

export default HomeAnimated;