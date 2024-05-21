import React from 'react';
import Link from 'next/link';
import Logo from '@/icons/Logo';

function LogoLink({ className }) {
    return (
        <Link href="/">
            <Logo className={className} />
        </Link>
    );
}

export default LogoLink;
