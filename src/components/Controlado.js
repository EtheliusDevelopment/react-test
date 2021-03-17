import React, { Fragment} from 'react';

function Controlado (props){
    const {tamano, tipo, onChangetamano, onChangetipo} = props
    return (
        <Fragment>
            <h1>Hamburguesa</h1>

<h3>Elije un tamano</h3>

<ul>
    <li><input name="tamano" onChange={e=>onChangetamano(e.target.value)} checked={tamano === 'chico'} value="chico"  type="radio" />Chico</li>
    <li><input name="tamano" onChange={e=>onChangetamano(e.target.value)} checked={tamano === 'mediano'} value="mediano"  type="radio" />Mediano</li>
    <li><input name="tamano" onChange={e=>onChangetamano(e.target.value)} checked={tamano === 'grande'} value="grande" type="radio" />Grande</li>

</ul>

<h3>Elije un tipo de carne</h3>
<ul>
<li><input name="tipo" onChange={e=>onChangetipo(e.target.value)} checked={tipo === 'pollo'} value="pollo" type="radio" />Pollo</li>
<li><input name="tipo" onChange={e=>onChangetipo(e.target.value)} checked={tipo === 'res'} value="res" type="radio" />Res</li>
<li><input name="tipo" onChange={e=>onChangetipo(e.target.value)} checked={tipo === 'cerdo'} value="cerdo" type="radio" />Cerdo</li>


</ul>

            <button>Aceptar</button>

        </Fragment>

    );
}

export default Controlado;