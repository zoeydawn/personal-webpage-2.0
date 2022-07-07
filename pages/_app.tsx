import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  // TODO: save theme to local storage

  return (
    <div data-theme={theme}>
      <Navbar setTheme={setTheme} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
