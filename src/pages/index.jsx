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
import FeedbackForm from '@/components/FeedbackForm';
import { useScrollFreeze } from '@/utils/hooks/useScrollFreeze';

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default function Index() {
    const [hasConnect, setHasConnect] = useState(false);
    const [hasFeedback, setHasFeedback] = useState(false);

    const router = useRouter();
    useScrollFreeze(hasConnect || hasFeedback);

    useEffect(() => {
        const { reg, feedback } = router.query;

        if (reg === 'true') {
            setHasConnect(true);
        }

        if (feedback === 'true') {
            setHasFeedback(true);
        }
    }, [router.query]);

    const handleConnectClick = useCallback(() => {
        setHasConnect((prev) => !prev);
    }, []);

    const handleFeedbackClick = useCallback(() => {
        setHasFeedback((prev) => !prev);
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
            {hasFeedback && <FeedbackForm onClose={handleFeedbackClick} />}
        </>
    );
}
