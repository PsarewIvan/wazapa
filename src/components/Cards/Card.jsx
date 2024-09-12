import React from 'react';
import styles from './Card.module.scss';

export function Card({ title, content, index }) {
    return (
        <div className={styles['card']}>
            <div className={styles['card__title']}>{title}</div>
            <div className={styles['card__content']}>{content}</div>
            <div className={styles['card__index']}>{index}</div>
        </div>
    );
}
