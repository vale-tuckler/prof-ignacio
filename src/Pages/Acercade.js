import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';

class AcercaDe extends React.Component{
    render(){
            return(
                <React.Fragment className ="container">
                    <NavigationBar />
                    <h1>ACERCA DE</h1>
                </React.Fragment>
            );
    };
};
export default AcercaDe;