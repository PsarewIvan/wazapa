import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { withMedia } from '../../utils/hoc/withMedia';
import { MIN_MEDIA } from '../../utils/constants/media';
import { useHeaderFixed } from '../../utils/hooks/useHeaderFixed';
import { useScrollFreeze } from '@/utils/hooks/useScrollFreeze';
import ConnectForm from '../ConnectForm';
import Login from '../Login';
import Phone from '../ui/Phone';
import Button from '../ui/Button';
import LogoLink from '../ui/LogoLink/LogoLink';
import TouchMenu from './TouchMenu';
import styles from './Header.module.scss';

const TabletBlock = withMedia(MIN_MEDIA.TABLET, (props) => (
    <div className={styles['header__info']}>
        <Phone />
        <Button {...props}>Войти</Button>
    </div>
));

function Header() {
    const { isMenuShow, isMenuFixed } = useHeaderFixed();

    const [hasConnect, setHasConnect] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    useScrollFreeze(hasConnect);

    const handleConnectClick = useCallback(() => {
        setHasConnect((prev) => !prev);
    }, []);

    const portalLogin = mounted
        ? createPortal(<Login onClose={handleConnectClick} />, document.body)
        : null;

    return (
        <header
            className={classNames(styles['header'], {
                // [styles['header_show']]: isMenuShow,
                // [styles['header_fixed']]: isMenuFixed,
            })}
        >
            <LogoLink className={styles['header__logo']} />
            <TouchMenu onConnectClick={handleConnectClick} />
            <TabletBlock
                size="l"
                theme="secondary"
                onClick={handleConnectClick}
            />
            {hasConnect && portalLogin}
        </header>
    );
}

export default Header;
