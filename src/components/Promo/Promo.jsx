import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { TEXT } from './text';
import styles from './Promo.module.scss';

function Promo({ onButtonClick }) {
    return (
        <section className={styles['promo']}>
            <div className={styles['promo__content']}>
                <p className={styles['promo__text']}>{TEXT.promo}</p>
                <h1 className={styles['promo__header']}>{TEXT.header}</h1>
                <p className={styles['promo__text2']}>{TEXT.promo2}</p>
                <div className={styles['promo__button-wrapper']}>
                    <Button
                        className={styles['promo__button']}
                        size="l"
                        onClick={onButtonClick}
                    >
                        {TEXT.button}
                    </Button>
                    <p className={styles['promo__text3']}>
                        {TEXT.buttonDescription}
                    </p>
                </div>
            </div>
            <div className={styles['promo__image-wrapper']}>
                <Image
                    alt="Promo"
                    className={styles['promo__image']}
                    fill
                    priority
                    src="images/main.jpg"
                />
            </div>
        </section>
    );
}

export default Promo;
