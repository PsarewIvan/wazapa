import React from 'react';
import Head from 'next/head';
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
            </Head>
            <Header />
            <main className="main">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
};

export default MyApp;
