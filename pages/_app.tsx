import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/elements/general/header/header';
import Footer from '../components/elements/general/footer/footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
