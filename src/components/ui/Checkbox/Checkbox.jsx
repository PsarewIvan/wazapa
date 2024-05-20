import React from 'react';
import classNames from 'classnames';
import OkIcon from '@/icons/Ok';
import styles from './Checkbox.module.scss';

function Checkbox({ className, children, checked, error, onChange }) {
    function handleCheckboxToggle() {
        onChange(!checked);
    }

    return (
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
            {children}
        </button>
    );
}

export default Checkbox;
