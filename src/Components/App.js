import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Inicio from '../Pages/Inicio.js';
import Acerca from '../Pages/Acercade.js';
import Servicios from '../Pages/Servicios.js';
import Contacto from '../Pages/Contacto.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/inicio" component = {Inicio} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path ="/acerca-de" component={Acerca} />
        <Route exact path="/contacto" component={Contacto} />
      </BrowserRouter>
      </div>
  );
}

export default App;
