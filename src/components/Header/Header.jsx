import React from 'react';
import classNames from 'classnames';
import { withMedia } from '../../utils/hoc/withMedia';
import { MIN_MEDIA } from '../../utils/constants/media';
import { useHeaderFixed } from '../../utils/hooks/useHeaderFixed';
import Phone from '../ui/Phone';
import Button from '../ui/Button';
import Logo from '../../icons/Logo';
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

    return (
        <header
            className={classNames(styles['header'], {
                [styles['header_show']]: isMenuShow,
                [styles['header_fixed']]: isMenuFixed,
            })}
        >
            <Logo className={styles['header__logo']} />
            <TouchMenu />
            <TabletBlock size="l" theme="secondary" />
        </header>
    );
}

export default Header;
