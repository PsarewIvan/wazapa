import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import Promo from '../components/Promo';
import Cards from '../components/Cards';
import Crm from '../components/Crm';
import Advantages from '../components/Advantages';
import Price from '../components/Price';
import Promotion from '../components/Promotion';
import Connect from '../components/Connect';
import ConnectForm from '@/components/ConnectForm';
import { useScrollFreeze } from '@/utils/hooks/useScrollFreeze';

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default function Index() {
    const router = useRouter();
    const [hasConnect, setHasConnect] = useState(false);
    useScrollFreeze(hasConnect);

    useEffect(() => {
        const { reg } = router.query;

        if (reg === 'true') {
            setHasConnect(true);
        }
    }, [router.query]);

    const handleConnectClick = useCallback(() => {
        setHasConnect((prev) => !prev);
    }, []);

    return (
        <>
            <Promo onButtonClick={handleConnectClick} />
            <Cards />
            <Crm />
            <Advantages />
            <Price />
            <Promotion />
            <Connect />
            {hasConnect && <ConnectForm onClose={handleConnectClick} />}
        </>
    );
}
