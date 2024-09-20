import React, { useCallback } from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import CrossIcon from '@/icons/Cross';
import styles from './Textarea.module.scss';

function Textarea({
    className,
    error,
    errorText,
    placeholder,
    value,
    width = 'max',
    onChange,
    onFocus,
    onBlur,
}) {
    const handleResetButtonClick = useCallback(() => {
        onChange('');
    }, [onChange]);

    const handleInputChange = useCallback(
        (evt) => {
            onChange(evt.target.value);
        },
        [onChange]
    );

    return (
        <div
            className={classNames(
                styles['wrapper'],
                styles[`wrapper_width-${width}`]
            )}
        >
            <textarea
                className={classNames(
                    styles['input'],
                    {
                        [styles['input_error']]: error,
                        [styles['input_full']]: value,
                    },
                    className
                )}
                placeholder={placeholder}
                // type={type}
                value={value}
                onChange={handleInputChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {error && errorText && (
                <span className={styles['error']}>{errorText}</span>
            )}
            {/* {value && value !== '' && (
                <button
                    className={styles['cross-button']}
                    type="button"
                    onClick={handleResetButtonClick}
                >
                    <CrossIcon className={styles['cross-icon']} />
                </button>
            )} */}
        </div>
    );
}

export default Textarea;
