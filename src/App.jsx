import React from 'react';

import './App.css';

import Result from "./components/Result";
import Numbers from "./components/Numbers";
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';


const App = () => {
    // funcion que retorna un array
    const [stack, setStack] = React.useState('');

    return (
        <main className='react-calculator'>
            <Result value={stack} />
            <Numbers onClickNumber={number => {
                console.log('number: ', number)
                setStack(`${stack}${number}`)
            }
            } />
            <Functions
                onContentClear={
                    () => {
                        console.log('content clear')
                        setStack('')
                    }
                }
                onDelete={
                    () => {
                        const newStack = stack.substring(0, stack.length - 1)
                        console.log('delete', newStack)
                        setStack(newStack);
                    }
                }
            />
            <MathOperations
                onClickOperation={
                    operation => {
                        console.log('Operation: ', operation)
                        setStack(`${stack}${operation}`)
                    }
                }
                onClickEqual={
                    equal => {
                        console.log('Equal: ', equal)
                        setStack(`${stack}${equal}`)
                    }
                }
            />
        </main>
    )
}




export default App;

