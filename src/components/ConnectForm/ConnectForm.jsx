import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../ui/Input/Input';
import Checkbox from '../ui/Checkbox';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import Success from './Success';
import styles from './ConnectForm.module.scss';

const siteKey = process.env.RE_CAPTCHA_SITE_KEY;

function ConnectForm({ discountTitle, onClose }) {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [policy, setPolicy] = useState(false);
    const [isCaptcha, setIsCaptcha] = useState(false);
    const [hasErrorTel, setErrorTel] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

    const handleReCaptchaChange = useCallback((value) => {
        setIsCaptcha(Boolean(value));
    }, []);

    const handleTelFocus = useCallback(() => {
        if (!tel.includes('_')) {
            setErrorTel(false);
        }
    }, [tel]);

    const handleTelBlur = useCallback(() => {
        if (tel.includes('_')) {
            setErrorTel(true);
        } else {
            setErrorTel(false);
        }
    }, [tel]);

    const handleReset = useCallback(() => {
        setName('');
        setTel('');
        setEmail('');
        setPolicy(false);
        setIsCaptcha(false);
        setErrorTel(false);
        setIsSuccess(false);
    }, []);

    const title = discountTitle
        ? 'Узнать о действующих акциях и скидках'
        : 'Подключиться бесплатно';

    return (
        <>
            <div
                className={styles['connect-form__overlay']}
                onClick={onClose}
            />
            <div className={styles['connect-form']}>
                <div className={styles['connect-form__content']}>
                    <h3 className={styles['connect-form__header']}>{title}</h3>
                    {isSuccess ? (
                        <Success
                            tel={tel}
                            onClose={onClose}
                            onReset={handleReset}
                        />
                    ) : (
                        <>
                            <p className={styles['connect-form__text']}>
                                Укажите ваш номер телефона и мы свяжемся с Вами
                                в ближайшее время
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
                                    error={hasErrorTel}
                                    errorText="Неверный формат номера"
                                    onChange={handleTelChange}
                                    onBlur={handleTelBlur}
                                    onFocus={handleTelFocus}
                                />
                                <Input
                                    type="email"
                                    placeholder="Ваш email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <Checkbox
                                checked={policy}
                                onChange={handlePolicyChange}
                            >
                                <div>
                                    Даю согласие на{' '}
                                    <Link
                                        className={styles['link']}
                                        href="/policy"
                                    >
                                        обработку своих персональных данных
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
                                className={styles['connect-form__captcha']}
                                src="images/captcha.png"
                                alt="Captcha"
                                width={320}
                                height={76}
                            />
                            <Button
                                className={styles['connect-form__button']}
                                disabled={
                                    !(policy && isCaptcha && !hasErrorTel)
                                }
                                size="l"
                                onClick={handleFormSubmit}
                            >
                                Отправить
                            </Button>
                        </>
                    )}
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

export default ConnectForm;
