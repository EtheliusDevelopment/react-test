import React, { Component } from 'react';
import Pagina from '../components/login'

class Contenedor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
                       
         };
         this.onChangeCampo = this.onChangeCampo.bind(this);
         this.onLogin = this.onLogin.bind(this);
    }

    onChangeCampo (campo, value) {
        this.setState({ [campo]:value});
    }

    onLogin(){
        console.log('onLogin', this.state)
    }

    render() { 
        const {email, password} = this.props
        return ( 
            <Pagina
            email = {email}
            password = {password}
            onChangeCampo={this.onChangeCampo}
            onLogin={this.onLogin}
        />
         );
    }
}
 
export default Contenedor;
