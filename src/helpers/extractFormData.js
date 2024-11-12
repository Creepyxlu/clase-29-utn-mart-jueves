const extractFormData = (form_jsx) => {
    //me devuelve un objeto con el que puedo manipular mi formulario
    const form_data = new FormData(form_jsx)
    //Obtener el valor de algun campo de mi formulario
    //console.log(form_data.get('nombre'))

    //Devuelve una lista de strings correspondientes a los nombres de mis campos
    const form_keys = form_data.keys().toArray()
    //Creamos un objeto para ir llenando con los valores y los campos
    const form_values = {}
    for (let key of form_keys) {
        //Creo nuevas propiedades
        form_values[key] = form_data.get(key)
    }
    return form_values
}
export default extractFormData