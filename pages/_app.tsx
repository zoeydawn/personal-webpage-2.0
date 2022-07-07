import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  // TODO: save theme to local storage

  return (
    <div className="flex flex-col min-h-screen" data-theme={theme}>
      <Navbar setTheme={setTheme} />
      <div className="">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
