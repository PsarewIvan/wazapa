import React, { useState, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../ui/Input/Input';
import Button from '../ui/Button';
import styles from './ForgotPass.module.scss';

const siteKey = process.env.RE_CAPTCHA_SITE_KEY;

function ForgotPass({ onClose, onReset }) {
    const [email, setEmail] = useState('');
    const [hasErrorEmail, setErrorEmail] = useState(false);

    const handleEmailChange = useCallback((value) => {
        setEmail(value);
    }, []);

    const handleEmailFocus = useCallback(() => {
        if (email !== '') {
            setErrorEmail(false);
        }
    }, [email]);

    const handleEmailBlur = useCallback(() => {
        if (email === '') {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    }, [email]);

    const handleLogin = useCallback(() => {
        // DO LOGIN
    }, []);

    return (
        <>
            <p className={styles['success__text']}>
                Введите адрес электронной почты привязанный к вашей учетной
                записи, и мы вышлем вам пароль.
            </p>
            <Input
                className={styles['success__input']}
                placeholder="Ваш email"
                type="email"
                value={email}
                error={hasErrorEmail}
                errorText="Не указан логин"
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onFocus={handleEmailFocus}
            />
            {siteKey && (
                <ReCAPTCHA sitekey={siteKey} onChange={handleReCaptchaChange} />
            )}
            <div className={styles['success__button-wrapper']}>
                <Button size="l" width="max" onClick={handleLogin}>
                    Войти
                </Button>
            </div>
        </>
    );
}

export default ForgotPass;
