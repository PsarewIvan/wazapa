import React from 'react';
import classNames from 'classnames';
import styles from './PriceTab.module.scss';

function PriceTab({ children, discount, size = 'm', selected, onClick }) {
    return (
        <button
            className={classNames(styles['button'], styles[`button_${size}`], {
                [styles['button_selected']]: selected,
                [styles['button_simple']]: !discount,
            })}
            type="button"
            onClick={onClick}
        >
            <span className={styles['button__content']}>
                <span className={styles['button__children']}>{children}</span>
                {discount && (
                    <span
                        className={classNames(styles['button__discount'], {
                            [styles['button__discount_selected']]: selected,
                        })}
                    >
                        {discount}
                    </span>
                )}
            </span>
        </button>
    );
}

export default PriceTab;
