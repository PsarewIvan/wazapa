import React, { useState, useCallback } from 'react';
import { TEXT } from './text';
import { useScrollFreeze } from '@/utils/hooks/useScrollFreeze';
import ConnectForm from '../ConnectForm';
import Button from '../ui/Button';
import styles from './Connect.module.scss';

function Connect() {
    const [hasConnect, setHasConnect] = useState(false);
    useScrollFreeze(hasConnect);

    const handleConnectClick = useCallback(() => {
        setHasConnect((prev) => !prev);
    }, []);

    return (
        <section className={styles['connect']}>
            <h2 className={styles['connect__header']}>{TEXT.header}</h2>
            <p className={styles['connect__text']}>{TEXT.text}</p>
            <Button
                className={styles['connect__button']}
                size="l"
                onClick={handleConnectClick}
            >
                {TEXT.button}
            </Button>
            <p className={styles['connect__promo']}>{TEXT.promo}</p>
            {hasConnect && <ConnectForm onClose={handleConnectClick} />}
        </section>
    );
}

export default Connect;
