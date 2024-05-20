import React from 'react';
import OkIcon from '../../icons/Ok';
import ImmIcon from '../../icons/Imm';
import { TEXT } from './text';
import Slider from './Slider';
import styles from './Price.module.scss';

function Price() {
    return (
        <section className={styles['price']}>
            <h2 className={styles['price__header']}>{TEXT.header}</h2>
            <ul className={styles['list']}>
                {TEXT.list.map((item) => (
                    <li className={styles['list__item']} key={item.text}>
                        <div className={styles['list__icon-wrapper']}>
                            {item.immIcon ? (
                                <ImmIcon className={styles['list__icon']} />
                            ) : (
                                <OkIcon className={styles['list__icon']} />
                            )}
                        </div>
                        <p className={styles['list__text']}>{item.text}</p>
                    </li>
                ))}
            </ul>
            <Slider />
        </section>
    );
}

export default Price;
