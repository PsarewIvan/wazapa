import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Input from '../ui/Input/Input';
import Checkbox from '../ui/Checkbox';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import styles from './ConnectForm.module.scss';

function ConnectForm({ onClose }) {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [policy, setPolicy] = useState(false);

    const handleNameChange = useCallback((value) => {
        setName(value);
    }, []);

    const handleTelChange = useCallback((value) => {
        setTel(value);
    }, []);

    const handleEmailChange = useCallback((value) => {
        setEmail(value);
    }, []);

    const handlePolicyChange = useCallback(() => {
        setPolicy((prev) => !prev);
    }, []);

    const handleFormSubmit = useCallback(() => {
        //
    }, []);

    return (
        <div className={styles['connect-form']}>
            <div className={styles['connect-form__content']}>
                <h3 className={styles['connect-form__header']}>
                    Подключиться бесплатно
                </h3>
                <p className={styles['connect-form__text']}>
                    Укажите ваш номер телефона и мы свяжемся с Вами в ближайшее
                    время
                </p>
                <div className={styles['connect-form__inputs']}>
                    <Input
                        placeholder="Ваше имя"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <Input
                        type="tel"
                        placeholder="+7"
                        value={tel}
                        onChange={handleTelChange}
                    />
                    <Input
                        type="email"
                        placeholder="Ваш email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <Checkbox checked={policy} onChange={handlePolicyChange}>
                    <div>
                        Даю согласие на{' '}
                        <Link className={styles['link']} href="/policy">
                            обработку своих персональных данных
                        </Link>
                    </div>
                </Checkbox>
                <Button
                    className={styles['connect-form__button']}
                    size="l"
                    onClick={handleFormSubmit}
                >
                    Отправить
                </Button>
            </div>
            <IconButton
                className={styles['close-button']}
                type="cross"
                onClick={onClose}
            />
        </div>
    );
}

export default ConnectForm;
