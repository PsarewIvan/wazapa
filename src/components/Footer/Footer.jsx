import React from 'react';
import Link from 'next/link';
import LogoInvert from '@/icons/LogoInvert';
import Nav from '../Nav';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__wrapper']}>
                <div className={styles['footer__logo-wrapper']}>
                    <Link href="/">
                        <LogoInvert className={styles['footer__logo']} />
                    </Link>
                    <p className={styles['footer__company']}>
                        © Wazapa 2020 - 2024
                    </p>
                </div>
                <Nav className={styles['footer__nav']} invert />
            </div>
        </footer>
    );
}

export default Footer;
