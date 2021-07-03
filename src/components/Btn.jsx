//Main imports
import React from 'react';
import classNames from 'classnames';

const Btn = (props) => {
    const { 
        children,
        outline,
        className,
        onButtonClick
    } = props;

    return (
        <button 
            className={
                classNames(
                    'button',
                    className,
                    { 'button--outline': outline }
                )
            }
            onClick={onButtonClick}
        >
            {children}
        </button>
    );
};

export default Btn;