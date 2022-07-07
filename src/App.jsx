import React from 'react';
import Result from "./components/Result";
import Numbers from "./components/Numbers";
import './App.css';
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';

const App = () => (
    <main className='react-calculator'>
        <Result value={"0"} />
        <Numbers onClickNumber={number => console.log('number: ', number)} />
        <Functions
            onContentClear={
                () => console.log('content clear')
            }
            onDelete={
                () => console.log('delete')
            }
        />
        <MathOperations
            onClickOperation={
                operation => console.log('Operation: ', operation)
            }
            onClickEqual={
                equal => console.log('Equal: ', equal)
            }
        />
    </main>
)



export default App;

