import React from 'react';
import LogoInvert from '@/icons/LogoInvert';
import Nav from '../Nav';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__logo-wrapper']}>
                <LogoInvert className={styles['footer__logo']} />
                <p className={styles['footer__company']}>
                    © Wazapa 2020 - 2024
                </p>
            </div>
            <Nav invert />
        </footer>
    );
}

export default Footer;
