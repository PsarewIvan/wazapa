import React, { useCallback } from 'react';
import classNames from 'classnames';
import CrossIcon from '@/icons/Cross';
import styles from './Input.module.scss';

function Input({
    className,
    error,
    errorText,
    placeholder,
    type = 'text',
    value,
    width = 'max',
    onChange,
}) {
    const handleResetButtonClick = useCallback(() => {
        onChange('');
    }, [onChange]);

    return (
        <div
            className={classNames(
                styles['wrapper'],
                styles[`wrapper_width-${width}`]
            )}
        >
            <input
                className={classNames(
                    styles['input'],
                    {
                        [styles['input_error']]: error,
                        [styles['input_full']]: value,
                    },
                    className
                )}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
            {error && errorText && (
                <span className={styles['error']}>{errorText}</span>
            )}
            {value && value !== '' && (
                <button
                    className={styles['cross-button']}
                    type="button"
                    onClick={handleResetButtonClick}
                >
                    <CrossIcon className={styles['cross-icon']} />
                </button>
            )}
        </div>
    );
}

export default Input;
