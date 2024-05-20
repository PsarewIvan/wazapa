import React, { useCallback } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Phone from '../ui/Phone';
import { EMAIL } from '../../constants';
import styles from './Nav.module.scss';

function Nav({ invert, onClick }) {
    const handleLinkClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    return (
        <nav
            className={classNames(styles['nav'], {
                [styles['nav_invert']]: invert,
            })}
        >
            <div
                className={classNames(styles['nav__link-list'], {
                    [styles['nav__link-list_invert']]: invert,
                })}
            >
                <div className={styles['nav__link-block']}>
                    <Link
                        className={classNames(styles['nav__link'], {
                            [styles['nav__link_invert']]: invert,
                        })}
                        href="#"
                        onClick={handleLinkClick}
                    >
                        О сервисе
                    </Link>
                    <Link
                        className={classNames(styles['nav__link'], {
                            [styles['nav__link_invert']]: invert,
                        })}
                        href="#"
                        onClick={handleLinkClick}
                    >
                        Цены
                    </Link>
                    <Link
                        className={classNames(styles['nav__link'], {
                            [styles['nav__link_invert']]: invert,
                        })}
                        href="#"
                        onClick={handleLinkClick}
                    >
                        База знаний
                    </Link>
                </div>
                <div className={styles['nav__link-block']}>
                    <Link
                        className={classNames(styles['nav__link'], {
                            [styles['nav__link_invert']]: invert,
                        })}
                        href="/offerta"
                        onClick={handleLinkClick}
                    >
                        Оферта
                    </Link>
                    <Link
                        className={classNames(styles['nav__link'], {
                            [styles['nav__link_invert']]: invert,
                        })}
                        href="/policy"
                        onClick={handleLinkClick}
                    >
                        Политика конфиденциальности
                    </Link>
                    <Link
                        className={classNames(styles['nav__link'], {
                            [styles['nav__link_invert']]: invert,
                        })}
                        href="/payments"
                        onClick={handleLinkClick}
                    >
                        Реквизиты
                    </Link>
                </div>
            </div>
            <div className={styles['nav__contacts']}>
                <Phone
                    className={classNames(styles['nav__phone'], {
                        [styles['nav__phone_invert']]: invert,
                    })}
                />
                <a
                    className={classNames(styles['nav__email'], {
                        [styles['nav__email_invert']]: invert,
                    })}
                    href={`mailto:${EMAIL}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {EMAIL}
                </a>
            </div>
        </nav>
    );
}

export default Nav;
