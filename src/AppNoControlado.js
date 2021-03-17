import React, { Component, Fragment } from 'react';
import Controlado from './components/Controlado'
import NoControlado from './components/NoControlado'

class App extends Component {
     
    render() { 
        
        return (
            <Fragment>
              

                <NoControlado onClickAceptar = {(datos) => {
                    console.log("Nocontrolado:", datos)
                }} />


            </Fragment>
          );
    }
}
 
export default App;