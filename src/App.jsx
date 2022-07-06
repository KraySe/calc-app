import React from 'react';
import Result from "./components/Result";
import Button from "./components/Button";
import './App.css';
import MathOperations from './components/MathOperations';

const App = () => {

    const clickHandlerFunction = text => {
        console.log('parent', text)
    };

    console.log('Render App');
    return (
        <main className='react-calculator'>
            <Result value={"0"} />
            <div className="numbers">
                {[...Array(10)].map((v, i) => {
                    const num = i + 1;
                    const numAdapted = num == 10 ? 0 : num;
                    return (<Button key={i} text={numAdapted.toString()} clickHandler={clickHandlerFunction} />)
                })}
            </div>
            <div className="functions">
                <button>clear</button>
                <button>remove</button>
            </div>
            <MathOperations onClickOperation={clickHandlerFunction} onClickEqual={clickHandlerFunction} />
        </main>
    )
}


export default App;

