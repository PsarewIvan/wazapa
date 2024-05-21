import React from 'react';
import classNames from 'classnames';
import Logo from '../../icons/Logo';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';
import Nav from '../Nav';
import styles from './MobileMenu.module.scss';

function MobileMenu({ isOpen, onClose, onLoginClick }) {
    return (
        <div
            className={classNames(styles['menu'], {
                [styles['menu_open']]: isOpen,
            })}
        >
            <div className={styles['menu__header']}>
                <Logo />
                <IconButton type="cross" onClick={onClose} />
            </div>
            <Nav onClick={onClose} />
            <div className={styles['menu__button-wrapper']}>
                <Button
                    size="l"
                    theme="secondary"
                    width="max"
                    onClick={onLoginClick}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
}

export default MobileMenu;
