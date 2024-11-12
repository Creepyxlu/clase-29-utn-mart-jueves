import React from 'react'
import "./global.css"
import HomeScreen from './components/Screens/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import WorkspaceScreen from './components/Screens/WorkspaceScreen'
import EstadosScreen from './components/Screens/EstadosScreen'
import FormulariosScreen from './components/Screens/FormulariosScreen'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/prueba' element={<h1>Hola, soy la prueba</h1>}/>
        <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
        <Route path='/estados' element={<EstadosScreen/>}/>
        <Route path='/formularios' element={<FormulariosScreen/>}></Route>
      </Routes>
    </div>
  )
}
export default App




//Componentes