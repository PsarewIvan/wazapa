import React, { useState, useCallback } from 'react';
import { useScrollFreeze } from '../../utils/hooks/useScrollFreeze';
import { withMedia } from '../../utils/hoc/withMedia';
import { MAX_MEDIA } from '../../utils/constants/media';
import IconButton from '../ui/IconButton';
import MobileMenu from './MobileMenu';

const TouchMenu = withMedia(MAX_MEDIA.TABLET, () => {
    const [isMenuOpen, setOpenMenu] = useState(false);
    useScrollFreeze(isMenuOpen);

    const handleMenuOpen = useCallback(() => {
        setOpenMenu(true);
    }, []);

    const handleMenuClose = useCallback(() => {
        setOpenMenu(false);
    }, []);

    return (
        <>
            <IconButton onClick={handleMenuOpen} />
            <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
        </>
    );
});

export default TouchMenu;
