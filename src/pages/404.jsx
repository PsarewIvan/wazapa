import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Page404() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/404');
    }, [router]);

    return <>404</>;
}
