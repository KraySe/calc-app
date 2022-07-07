import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// DRY: Don't Repeat Yourself
// v1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = onClickNumber => (
    numbers.map(number => <Button key={number} text={number.toString()} clickHandler={onClickNumber} />)
)

// v2
// const renderButtons = onClickNumber => (
//     [...Array(10)].map((v, i) => {
//         let num = i + 1;
//         let numAdapted = num == 10 ? 0 : num;
//         return (<Button key={i} text={numAdapted.toString()} clickHandler={onClickNumber} />)
//     })
// )

const Numbers = ({ onClickNumber }) => {
    return (<section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>)
}


Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;