import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'

const menuItems = [
  { title: 'About', href: '/' },
  { title: 'Experience', href: '/' },
  { title: 'Projects', href: '/' },
  { title: 'Contact', href: '/' },
  { title: 'PGP Key', href: '/' },
  { title: 'Blog', href: '/' },
]

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  // TODO: save theme to local storage

  return (
    <div className="drawer absolute top-0 left-0 bottom-0">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div
          className="flex flex-col min-h-screen justify-between"
          data-theme={theme}
        >
          <Navbar setTheme={setTheme} />
          <div className="pt-16">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {menuItems.map(({ title, href }, index) => (
            <li key={index}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MyApp
