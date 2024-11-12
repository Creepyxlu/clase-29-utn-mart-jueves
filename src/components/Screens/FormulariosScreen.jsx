import React, { useState } from 'react'
import extractFormData from '../../helpers/extractFormData'
import { getFormattedDateMMHHDDMM } from '../../helpers/getFormattedTime'

const FormulariosScreen = () => {
    //empieza como array vacío, usamos un estado pq nos permite manipular la recarga de un componente, permitiendo que se actualice mi html en caso de modificarse el array
    //const usuarios = []                   //aca ek array vacio, en caso de tener objetos los metos ahi
    const [usuarios, setUsuarios] = useState([]) 
    const [errors, setErrors] = useState({nombre: null, password: null})
    const handleSubmitUncontrolledForm = (evento) => {
        evento.preventDefault()
        //El evento es objeto con datos del evento en particular
        //El target de un evento es el elemento HTML que emitio dicho evento
        const form_jsx = evento.target
        const nuevo_usuario = extractFormData(form_jsx) //nombre y contraseña

        const errores_formulario = {nombre: null, password: null}
        let hayErrores = false
        if (!nuevo_usuario.nombre){
            errores_formulario.nombre = "No hay nombre"
            hayErrores = true
        }
        if (!nuevo_usuario.password){
            errores_formulario.password = "No hay contraseña"
            hayErrores = true
        }
        setErrors(errores_formulario)
        
        if (!hayErrores){
            nuevo_usuario.hora_creacion = getFormattedDateMMHHDDMM()
            setUsuarios([...usuarios, nuevo_usuario])
        }




    }
    console.log(usuarios)
    return (
        <div>
            <h1>Formularios en React</h1>
            {/* lo hará cuando se envie el formulario 
            Por defecto el evento submit nos recarga la pagina.*/}
            <form action="" onSubmit={handleSubmitUncontrolledForm}>
                <label htmlFor="nombre">Ingrese su nombre</label>
                <input type="nombre" id='nombre' name='nombre' />
                {errors.nombre && <span>Error</span>}
                <br/><br/>
                <label htmlFor="">Ingrese su contrseña</label>
                <input type="password" id='password' name='password' />
                {errors.password && <span>Error</span>}
                <br/><br/>
                <button type='submit'>Confirmar</button>
            </form>       
            <UsersList users={usuarios}/>
        </div>
    )
}

const UsersList = ({users}) =>{
    return (
        <div>
            {users.map(user =>{
                return <UserCard nombre={user.nombre} password={user.password} hora_creacion={user.hora_creacion}/>
            })}
        </div>
    )
}
const UserCard = ({nombre, password,hora_creacion }) =>{
    return (
        <div>
            <h2> Nombre : {nombre}</h2>
            <h2> Password: {password}</h2>
            <h3>Usuario creado a la hora: {hora_creacion}</h3>
            <hr />
        </div>
    )
}


export default FormulariosScreen