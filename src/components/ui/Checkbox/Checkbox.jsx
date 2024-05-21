import React from 'react';
import classNames from 'classnames';
import OkIcon from '@/icons/Ok';
import styles from './Checkbox.module.scss';

function Checkbox({
    className,
    children,
    checked,
    error,
    errorText,
    onChange,
}) {
    function handleCheckboxToggle() {
        onChange(!checked);
    }

    return (
        <div className={styles['wrapper']}>
            <button
                className={classNames(
                    styles['checkbox'],
                    {
                        [styles['checkbox_checked']]: checked,
                        [styles['checkbox_error']]: error,
                    },
                    className
                )}
                type="button"
                onClick={handleCheckboxToggle}
            >
                <span className={styles['checkbox__box']}>
                    {checked && <OkIcon className={styles['checkbox__icon']} />}
                </span>
            </button>
            <span className={styles['content']}>
                {children}
                {error && errorText && (
                    <span className={styles['error']}>{errorText}</span>
                )}
            </span>
        </div>
    );
}

export default Checkbox;
