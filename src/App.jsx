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
        <Numbers onClickNumbers={number => clickHandlerFunction(number)}/>
        <Functions 
            onContentClear={content => console.log(content)}
            onDelete={deletes => console.log(deletes)}
        />
        <MathOperations 
            onClickOperation={operation => console.log(operation)} 
            onClickEqual={equal => console.log(equal)} />
    </main>)
}

// exportación
export default App