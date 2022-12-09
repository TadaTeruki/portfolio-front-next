import Head from 'next/head'

const Config = (props: { title: string, subtitle: string }) => {
  return(
    <Head>
      <title>{props.title+" - Peruki's Portfolio"}</title>
      <meta property="og:image" content={process.env.NEXT_PUBLIC_PORTFOLIO_BASE_URL+"/static/welcome.jpg"} />
      <meta property="og:description" content={props.subtitle}/>
    </Head>
  )
};

export default Config;
