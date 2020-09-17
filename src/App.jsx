// importación
import React from 'react'
import './App.css'
import Result from './components/Result'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import Math from './components/Math'

// generación de la funcion del componente
const App = () => {
    // lo que ejecuta la funcion
    return (
    <main className='react-calculator'>
        <Result value={15} />
        <Numbers />
        <Functions />
        <Math />
    </main>)
}

// exportación
export default App