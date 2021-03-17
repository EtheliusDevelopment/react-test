import React, { Component } from 'react';

class Ciclo extends Component {
    constructor(props) {
        super(props);
        console.log ('constructor');
        this.state = {  }
    }
    componentDidMount (){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate') 
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');

    }
    render() { 
        console.log('render');
        return (
            <div>Hola Mundo</div>
          );
    }
}
 
export default Ciclo;