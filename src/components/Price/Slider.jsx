import React, { useState, useCallback } from 'react';
import PriceTab from '../ui/PriceTab';
import { TEXT } from './text';
import styles from './Slider.module.scss';

function Slider() {
    const [price, setPrice] = useState(TEXT.slider[0].price);

    const handleTabClick = useCallback(
        (value) => () => {
            setPrice(value);
        },
        []
    );

    return (
        <div className={styles['slider']}>
            <div className={styles['slider__tabs']}>
                {TEXT.slider.map((item) => (
                    <PriceTab
                        key={item.text}
                        discount={item.discount}
                        selected={item.price === price}
                        onClick={handleTabClick(item.price)}
                    >
                        {item.text}
                    </PriceTab>
                ))}
            </div>
            <span className={styles['slider__price']}>{price}</span>
        </div>
    );
}

export default Slider;
