import React, {useState}from 'react';
import {Formulario, Label, ContenedeorTerminos, ContenedorBotonCenentrado, Boton, MensajeExito, MensajeEror} from "./ComponentsFormulario/Forms";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ComponenteInput from "./ComponentsFormulario/Input";
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';




const App = () => {
    const [usuario, cambiarUsuario] = useState({campo : '', valido : null});
    const [nombre, cambiarNombre] = useState({campo : "", valido : null});
    const [password, cambiarPassword] = useState({campo : "", valido : null});
    const [password2, cambiarPassword2] = useState({campo : "", valido : null});
    const [correo, cambiarCorreo] = useState({campo : "", valido : null});
    const [telefono, cambiarTelefono] = useState({campo : "", valido : null});
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarPassword2 = () => {
        if (password.campo.length > 0){
            if (password.campo !== password2.campo){
                cambiarPassword2((prevState) => {
                    return {...prevState, valido : "false"}
                });
            } else {
                cambiarPassword2((prevState) => {
                    return {...prevState, valido : "true"}
                });
            }


        }
    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(usuario.valido === "true" &&
           nombre.valido === "true"&&
           password.valido === "true" &&
           password2.valido === "true" &&
           correo.valido === "true" &&
           telefono.valido === "true" &&
           terminos
           ) {
               cambiarFormularioValido(true);
               cambiarUsuario({campo : '', valido : ''});
               cambiarNombre({campo : '', valido : null});
               cambiarPassword({campo : '', valido : null});
               cambiarPassword2({campo : '', valido : "null"});
               cambiarCorreo({campo : '', valido : null});
               cambiarTelefono({campo : '', valido : null});

        } else { cambiarFormularioValido(false)
        }
    }

    return ( 
        <main>
            <Formulario action ="" onSubmit={onSubmit}>
            <ComponenteInput
                estado = {usuario}
                cambiarEstado = {cambiarUsuario}
                tipo = "text" 
                label = "Usuario"
                placeholder = "Andrea123"
                name = "utente"
                leyendaError = " l'utenete deve avere da 4 a 16 caratteri alfanumerici"
                expresionRegular = {expresiones.usuario}
            />

                <ComponenteInput
                estado = {nombre}
                cambiarEstado = {cambiarNombre}
                tipo = "text" 
                label = "Nome"
                placeholder = "inserisci il tuo nome"
                name = "nome"
                leyendaError = " l'utenete deve avere da 4 a 16 caratteri alfanumerici"
                expresionRegular = {expresiones.nombre}
            />

                <ComponenteInput
                estado = {password}
                cambiarEstado = {cambiarPassword}
                tipo = "password" 
                label = "Pssword"
                placeholder = "password"
                name = "password"
                leyendaError = " la password deve avere da 4 a 16 caratteri alfanumerici"
                expresionRegular = {expresiones.password}
            />

            <ComponenteInput
                estado = {password2}
                cambiarEstado = {cambiarPassword2}
                tipo = "password" 
                label = "Ripeti la Pssword"
                placeholder = "password"
                name = "password2"
                leyendaError = " la password deve avere da 4 a 16 caratteri alfanumerici"
                funcion = {validarPassword2}
            />

                <ComponenteInput
                estado = {correo}
                cambiarEstado = {cambiarCorreo}
                tipo = "email" 
                label = "Email"
                placeholder = "info@email.com"
                name = "email"
                leyendaError = " la mail deve essere valida"
                expresionRegular = {expresiones.correo}
            />

                <ComponenteInput
                estado = {telefono}
                cambiarEstado = {cambiarTelefono}
                tipo = "tel" 
                label = "Telefono"
                placeholder = "+1 000 000"
                name = "telefono"
                leyendaError = " il numero di telefono deve essere valido"
                expresionRegular = {expresiones.telefono}
            />
        
          
                
                <ContenedeorTerminos>
                    <Label>
                        <input 
                        type ="checkbox"  
                        name = "terminos" 
                        id= "terminos" 
                        checked={terminos} 
                        onChange= {onChangeTerminos}
                        />
                        Accetto i termini e le condizioni
                    </Label>
                </ContenedeorTerminos>
                {formularioValido === false && <MensajeEror>
                    <p>
                        <FontAwesomeIcon icon ={faExclamationTriangle}/>
                        <b>Errore:</b> Compilare correttamente i campi
                    </p>
                </MensajeEror>}
                <ContenedorBotonCenentrado>
                    <Boton type="submit">Inviare</Boton>
                    {formularioValido === true && <MensajeExito>I dati sono stati inviati correttamente</MensajeExito>}
                </ContenedorBotonCenentrado>
            </Formulario>
        </main>
     );
}


export default App;