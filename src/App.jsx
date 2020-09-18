// importación
import React from 'react'
import Button from './components/Button/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

// generación de la funcion del componente
const App = () => {

    const clickHandlerFunction = text => console.log(text);

    // lo que ejecuta la funcion
    return (
    <main className='react-calculator'>
        <Result value={"15"} />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction}/>
            <Button text="2" clickHandler={clickHandlerFunction}/>
            <Button text="3" clickHandler={clickHandlerFunction}/>
            <Button text="4" clickHandler={clickHandlerFunction}/>
            <Button text="5" clickHandler={clickHandlerFunction}/>
            <Button text="6" clickHandler={clickHandlerFunction}/>
            <Button text="7" clickHandler={clickHandlerFunction}/>
            <Button text="8" clickHandler={clickHandlerFunction}/>
            <Button text="9" clickHandler={clickHandlerFunction}/>
            <Button text="0" clickHandler={clickHandlerFunction}/>
        </div>
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