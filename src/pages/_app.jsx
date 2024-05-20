import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'normalize.css';
import '../styles/global.scss';

const MyApp = function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/bg.jpg" />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:locale" content="ru_RU" />
                {/* <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#5bbad5"
                /> */}
                {/* <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#ffffff" /> */}
            </Head>
            {/* <Script src="/ymetrica.js" strategy="lazyOnload" /> */}
            <Header />
            <main className="main">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
};

export default MyApp;
