import Link from 'next/link'
import { FaAdjust } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { firstName } from '../lib/names'

const availableThemes = [
  'light',
  'dark',
  'cupcake',
  //   "bumblebee",
  //   "emerald",
  //   "corporate",
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  //   "garden",
  //   "forest",
  //   "aqua",
  //   "lofi",
  //   "pastel",
  //   "fantasy",
  //   "wireframe",
  //   "black",
  //   "luxury",
  //   "dracula",
  //   "cmyk",
  //   "autumn",
  //   "business",
  //   "acid",
  //   "lemonade",
  //   "night",
  //   "coffee",
  //   "winter",
]

const menuItems = [
  { title: 'About', href: '/' },
  { title: 'Experience', href: '/' },
  { title: 'Projects', href: '/' },
  { title: 'Contact', href: '/' },
  { title: 'Blog', href: '/' },
]

type NavbarProps = {
  setTheme: (value: string) => void
}

const Navbar = ({ setTheme }: NavbarProps) => (
  <>
    <div className="drawer absolute top-0 left-0 bottom-0">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {menuItems.map(({ title, href }) => (
            <li>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="navbar fixed bg-neutral text-neutral-content">
      <div className="flex-none">
        <label className="btn btn-square btn-ghost" htmlFor="my-drawer">
          <GiHamburgerMenu className="inline-block w-5 h-5 stroke-current" />
        </label>
      </div>

      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{firstName}</a>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-circle btn-ghost m-1">
          <FaAdjust />
        </label>

        <ul tabIndex={0} className="dropdown-content menu p-2 w-52">
          {availableThemes.map((themeName) => (
            <li key={themeName}>
              <div data-theme={themeName} className="m-1 p-0">
                <div
                  className="btn btn-outline btn-block p-1"
                  onClick={() => setTheme(themeName)}
                  data-theme={themeName}
                >
                  {themeName}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
)

export default Navbar
