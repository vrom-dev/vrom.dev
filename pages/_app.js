import Head from 'next/head'

import '../styles/globals.scss'
import '../styles/prism.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>vrom.dev 👨‍💻</title>
      <meta name='description' content='Víctor Romero - Portfolio' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
