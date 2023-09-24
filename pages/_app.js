import '../styles/globals.css'
import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  return (<>
    <Head >
      <title>Verattend App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <NavBar />
    <Component className="scroll-smooth" {...pageProps} />
  </>)
};


export default MyApp
