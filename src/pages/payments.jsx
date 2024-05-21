import React from 'react';
import Link from 'next/link';
import { EMAIL_HELLO } from '@/constants';
import styles from '../styles/Pages.module.scss';

function Payments() {
    return (
        <div className={styles['main']}>
            <div className={styles['nav']}>
                <Link href="/">На главную</Link>
                <span>/</span>
                <span>Реквизиты</span>
            </div>
            <h1>Реквизиты</h1>
            <p>ИП Галиев Тимур Камилевич</p>
            <p>ИНН: 027405480897</p>
            <p>ОГРНИП: 323774600615019</p>
            <p>Расчетный счет № 40802810302740006268 в АО «АЛЬФА-БАНК»,</p>
            <p>БИК 044525593,</p>
            <p>к/с 30101810200000000593 в ГУ Банка России по ЦФО.</p>
            <p>Адрес: г. Москва, Береговой проезд, д. 5а, корп. 5</p>

            <div className={styles['contact']}>
                <p>По всем вопросам свяжитесь с нами:</p>
                <a
                    href={`mailto:${EMAIL_HELLO}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {EMAIL_HELLO}
                </a>
            </div>
        </div>
    );
}

export default Payments;
