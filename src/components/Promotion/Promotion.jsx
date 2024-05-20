import React, { useCallback } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { TEXT } from './text';
import styles from './Promotion.module.scss';

function Promotion() {
    const handleButtonClick = useCallback(() => {
        //
    }, []);

    return (
        <section className={styles['promotion']}>
            <h2 className={styles['promotion__header']}>{TEXT.header}</h2>
            <p className={styles['promotion__text']}>{TEXT.text}</p>
            <Button
                className={styles['promotion__button']}
                size="l"
                onClick={handleButtonClick}
            >
                {TEXT.button}
            </Button>
            <div className={styles['promotion__image-wrapper']}>
                <Image
                    className={styles['promotion__image']}
                    src="/images/promotion.svg"
                    alt="Promotion"
                    fill
                    priority
                />
            </div>
        </section>
    );
}

export default Promotion;
