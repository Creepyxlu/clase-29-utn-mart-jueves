//Significa: React Arrow Function Component Export Default
//Un componente de React exportado por defecto 
import React, {useState} from 'react' //para crear estados en react

const EstadosScreen = () => {
    //Devuelve un array con el valor de tue stado y una funcion de seteo. useState => [stateValue, setState]
    //Espera recibir el valor inicial de tu estado
    //contador state es un array con dos valores, el 1, el valor de mi contador inicial y una funcion de seteo
    //No se puede reasignar el valor de un estado 
    //Reglas: un estado es INMUTABLE
    //Si queremos cambiar el valor de un estado debemos usar siempre la funcion de seteo 
    //Que espera recibir la funcion de seteo? la funcion de setting recibe 
    //1: valor que se será el nuevo valor del estado 


    const [contador, setContador] =useState(1)
    const [errorMinValue, setErrorMinValue] = useState(false)
    const sumar = () =>{
        //llamo a la funcion de setting, q seria la segunda [1]
        setContador ((prevState) =>{
            return prevState +1
        })
    }
    const restar = () =>{
        if (contador > 1){
            setContador ((prevState) =>{
                return prevState - 1
            })
        }else{       
            setErrorMinValue(true)
        }
    }
    

    const handleShowHiddenText = () =>{
        //Es necesario pasar una callback? Si conviene
        setIsHiddenText(
            (prevTextIsHiddenState) => {
                return !prevTextIsHiddenState
            }
        )
    }
    const [isHiddenText, setIsHiddenText] = useState(true)

    return (
/* Problema, quiero que se actualice en la pantalla el valor del contador cuando se actualice sumando o restando. Debemos usar estos de react */
    <div>
        {console.log("hola, me imprimí")}
        <h1>Estados en React</h1>
        <div>
            <button onClick={restar}>Restar</button>
            <span>{contador}</span>
            <button onClick={sumar}>Sumar</button>
            <button onClick={handleShowHiddenText}>Abrir</button>
            {
                !isHiddenText && <span>Texto oculto</span>
            }
            {errorMinValue &&<span>Error, el contador no puede ser menor a 1</span>}
        </div>
    </div>
    )
}

export default EstadosScreen



/* Ejemplo funcional
import React, { useState } from 'react'

const StateScreen = () => {
    const [contador, setContador] = useState(1)

    const incrementar = () => {
        setContador(contador + 1)
        setErrorMinimoContador(false) 

    }
    const decrementarError = () => {
        contador === 1 ? setErrorMinimoContador(true) : setContador(contador - 1)
    }
    const [errorMinimoContador, setErrorMinimoContador] = useState(false)
    return (
    <div>
        <h1>Estados en React</h1>
        
        <div>
            <button onClick={decrementarError}>Restar</button>
            <span>{contador}</span>
            <button onClick={incrementar}>Sumar</button>
            {
            errorMinimoContador && <span>El estado no puede ser negativo</span>
            }
        </div>
        
    </div>
    )
    }

export default StateScreen

*/