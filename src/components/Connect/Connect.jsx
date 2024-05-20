import React from 'react';
import { TEXT } from './text';
import Button from '../ui/Button';
import styles from './Connect.module.scss';

function Connect() {
    return (
        <section className={styles['connect']}>
            <h2 className={styles['connect__header']}>{TEXT.header}</h2>
            <p className={styles['connect__text']}>{TEXT.text}</p>
            <Button size="l">{TEXT.button}</Button>
            <p className={styles['connect__promo']}>{TEXT.promo}</p>
        </section>
    );
}

export default Connect;
