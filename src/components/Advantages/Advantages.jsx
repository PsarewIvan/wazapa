import React from 'react';
import Image from 'next/image';
import { TEXT } from './text';
import styles from './Advantages.module.scss';

function Advantages() {
    return (
        <section className={styles['adv']}>
            <h2 className={styles['adv__header']}>{TEXT.header}</h2>
            <ul className={styles['list']}>
                {Object.values(TEXT.list).map((item) => (
                    <li className={styles['list__item']} key={item.id}>
                        <div className={styles['list__image-wrapper']}>
                            <Image
                                className={styles['list__image']}
                                src={item.image}
                                alt={item.header}
                                fill
                                priority
                            />
                        </div>
                        <h3 className={styles['list__header']}>
                            {item.header}
                        </h3>
                        <p className={styles['list__text']}>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Advantages;
