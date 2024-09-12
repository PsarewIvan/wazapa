import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { useScrollFreeze } from '@/utils/hooks/useScrollFreeze';
import ConnectForm from '../ConnectForm';
import Button from '../ui/Button';
import { TEXT } from './text';
import styles from './Promotion.module.scss';

function Promotion() {
    const [hasConnect, setHasConnect] = useState(false);
    useScrollFreeze(hasConnect);

    const handleConnectClick = useCallback(() => {
        setHasConnect((prev) => !prev);
    }, []);

    return (
        <section className={styles['promotion']}>
            <div className={styles['promotion__content']}>
                <h2 className={styles['promotion__header']}>{TEXT.header}</h2>
                <p className={styles['promotion__text']}>{TEXT.text}</p>
                <Button
                    className={styles['promotion__button']}
                    size="l"
                    onClick={handleConnectClick}
                >
                    {TEXT.button}
                </Button>
            </div>
            <div className={styles['promotion__image-wrapper2']}>
                <div className={styles['promotion__image-wrapper']}>
                    <Image
                        className={styles['promotion__image']}
                        src="images/promotion.svg"
                        alt="Promotion"
                        fill
                        priority
                    />
                </div>
            </div>
            {hasConnect && (
                <ConnectForm discountTitle onClose={handleConnectClick} />
            )}
        </section>
    );
}

export default Promotion;
