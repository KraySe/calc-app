import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
        <Button text="" clickHandler={onClickNumber} />
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;