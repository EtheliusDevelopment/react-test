import React, { Component } from 'react';
import Ciclo from './components/Ciclo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            montado : true,
         };
    }
    render() { 
        const {montado} = this.state;
                return ( 
            <React.Fragment>
                {montado &&
                <Ciclo />}

                <button
                    onClick = {() => this.setState ({montado : !montado})}
                >
                    Toggle Montar
                </button>
            </React.Fragment>
         );
    }
}
 
export default App;