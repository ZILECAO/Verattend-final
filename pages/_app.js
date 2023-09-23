import '../styles/globals.css'
import { React } from 'react'
import { WalletConnect } from "../components/walletConnect"

function MyApp({ Component, pageProps }) {

  return (
    <>
      <WalletConnect />  
        <Component {...pageProps} />
    </>)
}

export default MyApp
