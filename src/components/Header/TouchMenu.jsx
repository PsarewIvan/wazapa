import React, { useState, useCallback } from 'react';
import { useScrollFreeze } from '../../utils/hooks/useScrollFreeze';
import { withMedia } from '../../utils/hoc/withMedia';
import { MAX_MEDIA } from '../../utils/constants/media';
import Login from '../Login';
import IconButton from '../ui/IconButton';
import MobileMenu from './MobileMenu';

const TouchMenu = withMedia(MAX_MEDIA.TABLET, ({ onConnectClick }) => {
    const [isMenuOpen, setOpenMenu] = useState(false);
    const [isLoginOpen, setLoginMenu] = useState(false);

    useScrollFreeze(isMenuOpen || isLoginOpen);

    const handleMenuOpen = useCallback(() => {
        setOpenMenu(true);
    }, []);

    const handleMenuClose = useCallback(() => {
        setOpenMenu(false);
    }, []);

    const handleLoginClick = useCallback(() => {
        setOpenMenu(false);
        setLoginMenu(true);
    }, []);

    const handleLoginClose = useCallback(() => {
        setLoginMenu(false);
    }, []);

    const handleConnectClick = useCallback(() => {
        setLoginMenu(false);
        onConnectClick(true);
    }, [onConnectClick]);

    return (
        <>
            <IconButton onClick={handleMenuOpen} />
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
                onLoginClick={handleLoginClick}
            />
            {isLoginOpen && (
                <Login
                    onClose={handleLoginClose}
                    onConnectClick={handleConnectClick}
                />
            )}
        </>
    );
});

export default TouchMenu;
