import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../ui/Input/Input';
import Checkbox from '../ui/Checkbox';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import ForgotPass from './ForgotPass';
import styles from './Login.module.scss';

const siteKey = process.env.RE_CAPTCHA_SITE_KEY;

function Login({ onClose, onConnectClick }) {
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [policy, setPolicy] = useState(false);
    const [isCaptcha, setIsCaptcha] = useState(false);
    const [hasErrorPolicy, setErrorPolicy] = useState(false);
    const [hasErrorEmail, setErrorEmail] = useState(false);
    const [hasErrorPass, setErrorPass] = useState(false);
    const [isForgotPass, setIsForgotPass] = useState(false);

    const handlePassChange = useCallback((value) => {
        setPass(value);
    }, []);

    const handleEmailChange = useCallback((value) => {
        setEmail(value);
    }, []);

    const handlePolicyChange = useCallback(() => {
        setPolicy((prev) => !prev);
    }, []);

    const handleFormSubmit = useCallback(() => {
        if (!policy) {
            setErrorPolicy(true);
        } else {
            // DO FORM
        }
    }, [policy]);

    const handleReCaptchaChange = useCallback((value) => {
        setIsCaptcha(Boolean(value));
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

    const handlePassFocus = useCallback(() => {
        if (pass !== '') {
            setErrorPass(false);
        }
    }, [pass]);

    const handlePassBlur = useCallback(() => {
        if (pass === '') {
            setErrorPass(true);
        } else {
            setErrorPass(false);
        }
    }, [pass]);

    const handleForgotClick = useCallback(() => {
        setIsForgotPass(true);
    }, []);

    const handleReset = useCallback(() => {
        setPass('');
        setEmail('');
        setPolicy(false);
        setIsCaptcha(false);
        setErrorPolicy(false);
        setErrorEmail(false);
        setErrorPass(false);
        setIsForgotPass(false);
    }, []);

    const title = isForgotPass ? 'Забыли пароль?' : 'Вход в личный кабинет';

    return (
        <>
            <div className={styles['login-form__overlay']} />
            <div className={styles['login-form']}>
                <div className={styles['login-form__content']}>
                    <h3 className={styles['login-form__header']}>{title}</h3>
                    {isForgotPass ? (
                        <ForgotPass onClose={onClose} onReset={handleReset} />
                    ) : (
                        <>
                            <div className={styles['login-form__inputs']}>
                                <Input
                                    placeholder="Ваш email"
                                    type="email"
                                    value={email}
                                    error={hasErrorEmail}
                                    errorText="Не указан email"
                                    onChange={handleEmailChange}
                                    onBlur={handleEmailBlur}
                                    onFocus={handleEmailFocus}
                                />
                                <Input
                                    type="password"
                                    placeholder="Ваш пароль"
                                    value={pass}
                                    error={hasErrorPass}
                                    errorText="Не указан пароль"
                                    onChange={handlePassChange}
                                    onBlur={handlePassBlur}
                                    onFocus={handlePassFocus}
                                />
                            </div>
                            <button
                                className={styles['login-form__sign-button']}
                                type="button"
                                onClick={handleForgotClick}
                            >
                                Забыли пароль?
                            </button>
                            <Checkbox
                                checked={policy}
                                error={hasErrorPolicy}
                                errorText="Необходимо ваше подтверждение"
                                onChange={handlePolicyChange}
                            >
                                <div>
                                    Я подтверждаю, что ознакомлен с условиями{' '}
                                    <Link
                                        className={styles['link']}
                                        href="/policy"
                                        onClick={onClose}
                                    >
                                        Пользовательского соглашения
                                    </Link>{' '}
                                    и{' '}
                                    <Link
                                        className={styles['link']}
                                        href="/offerta"
                                        onClick={onClose}
                                    >
                                        Оферты
                                    </Link>
                                </div>
                            </Checkbox>
                            {/* {siteKey && (
                                <ReCAPTCHA
                                    sitekey={siteKey}
                                    onChange={handleReCaptchaChange}
                                />
                            )} */}
                            <Image
                                className={styles['login-form__captcha']}
                                src="/images/captcha.png"
                                alt="Captcha"
                                width={320}
                                height={76}
                            />
                            <Button
                                className={styles['login-form__button']}
                                disabled={
                                    !(
                                        isCaptcha &&
                                        !hasErrorEmail &&
                                        !hasErrorPass
                                    )
                                }
                                size="l"
                                onClick={handleFormSubmit}
                            >
                                Войти
                            </Button>
                        </>
                    )}
                    <p className={styles['login-form__sign-text']}>
                        Не зарегистрированы?{' '}
                        <button
                            className={styles['login-form__sign-button']}
                            type="button"
                            onClick={onConnectClick}
                        >
                            Подключитесь
                        </button>
                    </p>
                </div>
                <IconButton
                    className={styles['close-button']}
                    type="cross"
                    onClick={onClose}
                />
            </div>
        </>
    );
}

export default Login;
