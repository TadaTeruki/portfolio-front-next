import Head from 'next/head'

const HeadInfo = (props: { title: string; subtitle: string }) => {
    const ogpimage = process.env.NEXT_PUBLIC_OGP_IMAGE

    return (
        <Head>
            <title>{props.title + " - Peruki's Portfolio"}</title>
            <meta property="og:site_name" content="Peruki's Portfolio" />
            <meta property="og:description" content={props.subtitle} />
            <meta property="og:image" content={ogpimage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@PerukiFUN" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.subtitle} />
            <meta name="twitter:image" content={ogpimage} />
        </Head>
    )
}

export default HeadInfo
