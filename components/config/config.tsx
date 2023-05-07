import Head from 'next/head'

const Config = (props: { title: string, subtitle: string }) => {
    return (
        <Head>
            <title>{props.title + " - Peruki's Portfolio"}</title>
            <meta
                property="og:image"
                content={
                    process.env.NEXT_PUBLIC_PORTFOLIO_BASE_URL +
                    "/static/welcome.jpg"
                }
            />
            <meta property="og:description" content={props.subtitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@PerukiFUN" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.subtitle} />
            <meta
                name="twitter:image"
                content={
                    process.env.NEXT_PUBLIC_PORTFOLIO_BASE_URL +
                    "/static/welcome.jpg"
                }
            />
        </Head>
    );
};

export default Config;
