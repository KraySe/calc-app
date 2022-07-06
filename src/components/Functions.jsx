import React from 'react';
import PropType from 'prop-types';
import Button from './Button';


const Functions = ({ onContentClear, onDelete }) => (
    <section className="functions">
        <Button type={'button-long-text'} text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
)

Functions.propTypes = {
    onContentClear: PropType.func.isRequired,
    onDelete: PropType.func.isRequired
}

export default Functions;