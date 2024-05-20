import React, { useMemo } from 'react';
import classNames from 'classnames';
import BurgerIcon from '../../../icons/Burger';
import CrossIcon from '../../../icons/Cross';
import styles from './IconButton.module.scss';

function IconButton({ className, type = 'burger', onClick }) {
    const icon = useMemo(() => {
        switch (type) {
            case 'burger':
                return <BurgerIcon />;
            case 'cross':
                return <CrossIcon />;
            default:
                return null;
        }
    }, [type]);

    return (
        <button
            className={classNames(styles['button'], className)}
            type="button"
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export default IconButton;
