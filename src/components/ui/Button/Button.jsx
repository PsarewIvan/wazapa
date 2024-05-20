import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

function Button({
    className,
    children,
    disabled,
    size = 'm',
    theme = 'primary',
    width = 'auto',
    onClick,
}) {
    return (
        <button
            className={classNames(
                styles['button'],
                styles[`button_${size}`],
                styles[`button_${theme}`],
                styles[`button_width-${width}`],
                {
                    [styles['button_disabled']]: disabled,
                },
                className
            )}
            disabled={disabled}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
