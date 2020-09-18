// importación
import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// generación de la funcion del componente
const App = () => {

    const clickHandlerFunction = text => console.log(text);

    // lo que ejecuta la funcion
    return (
    <main className='react-calculator'>
        <Result value={"15"} />
        <Numbers onClickNumber={clickHandlerFunction}/>
        <Functions 
            onContentClear={clickHandlerFunction}
            onDelete={clickHandlerFunction}
        />
        <MathOperations 
            onClickOperation={clickHandlerFunction} 
            onClickEqual={clickHandlerFunction} />
    </main>)
}

// exportación
export default App