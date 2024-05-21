import React from 'react';
import Button from '../ui/Button';
import styles from './Success.module.scss';

function Success({ tel, onClose, onReset }) {
    return (
        <>
            <p className={styles['success__text']}>
                Ваш запрос успешно отправлен
            </p>
            <p
                className={styles['success__text2']}
            >{`В ближайшее время мы позвоним по указанному вами номеру: ${tel}`}</p>
            <p className={styles['success__text3']}>
                Если вы ошиблись, указав неверный номер телефона, вы можете{' '}
                <button
                    className={styles['success__link-back']}
                    type="button"
                    onClick={onReset}
                >
                    отправить запрос повторно
                </button>
                .
            </p>
            <div className={styles['success__button-wrapper']}>
                <Button
                    size="l"
                    theme="secondary"
                    width="max"
                    onClick={() => {
                        onReset();
                        onClose();
                    }}
                >
                    Закрыть
                </Button>
            </div>
        </>
    );
}

export default Success;
