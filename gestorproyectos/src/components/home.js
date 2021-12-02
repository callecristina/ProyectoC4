import React from 'react'
import Login from './login'

export default function Home(props){

    let tipoIngresado=""
    function handleClick(){
        debugger;
        tipoIngresado=document.getElementById("nombreTipo").value
    }
    return (
        <>
        <div>
            <h1>Gestor de {props.nombre}</h1>
            <Login></Login>
            <div>Tipo ingresado por el usaurio{tipoIngresado}</div>
            <input type="text" name="nombreTipo" id="idTipo"></input>
        </div>
        <button onClick={handleClick}>cambiar tipo</button>
        </>
    )
}
