import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { TEXT } from './text';
import styles from './Crm.module.scss';

const AMO_IMAGE = '/images/amoCRM.png';
const BITRIX_IMAGE = '/images/bitrix24.png';

function Crm() {
    const [image, setImage] = useState(BITRIX_IMAGE);

    const handleAmoClick = useCallback(() => {
        setImage(AMO_IMAGE);
    }, []);

    const handleBitrixClick = useCallback(() => {
        setImage(BITRIX_IMAGE);
    }, []);

    return (
        <section className={styles['crm']}>
            <h2 className={styles['crm__header']}>
                Пиши прямо <br /> из{' '}
                <button
                    className={classNames(styles['crm__header-button'], {
                        [styles['crm__header-button_active']]:
                            image === BITRIX_IMAGE,
                    })}
                    type="button"
                    onClick={handleBitrixClick}
                >
                    Битрикс 24
                </button>{' '}
                и{' '}
                <button
                    className={classNames(styles['crm__header-button'], {
                        [styles['crm__header-button_active']]:
                            image === AMO_IMAGE,
                    })}
                    type="button"
                    onClick={handleAmoClick}
                >
                    amoCRM
                </button>
            </h2>
            <p className={styles['crm__promo']}>{TEXT.promo}</p>
            <ul className={styles['crm__list']}>
                {Object.values(TEXT.list).map((value) => (
                    <li className={styles['crm__list-item']} key={value}>
                        {value}
                    </li>
                ))}
            </ul>
            <div className={styles['crm__image-wrapper-border']}>
                <div className={styles['crm__image-wrapper']}>
                    <Image
                        className={styles['crm__image']}
                        src={image}
                        alt="Crm"
                        fill
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

export default Crm;
