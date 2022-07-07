import React from 'react';

import './App.css';

import Result from "./components/Result";
import Numbers from "./components/Numbers";
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';


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

