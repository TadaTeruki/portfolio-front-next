import Head from 'next/head'

const Config = (props: { title: string, subtitle: string }) => {
  return(
    <Head>
      <title>{props.title+" - Peruki's Portfolio"}</title>
      <meta property="og:image" content="static/myicon.jpg" />
      <meta property="og:description" content={props.subtitle}/>
    </Head>
  )
};

export default Config;
