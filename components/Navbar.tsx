import Link from 'next/link'
import { FaAdjust, FaChevronDown } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { importantSocialMediaLinks, socialMediaLinks } from '../lib/links'
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

type NavbarProps = {
  setTheme: (value: string) => void
}

const Navbar = ({ setTheme }: NavbarProps) => (
  <div>
    <div className="navbar fixed bg-neutral text-neutral-content">
      <div className="flex-none">
        <label className="btn btn-square btn-ghost" htmlFor="my-drawer">
          <GiHamburgerMenu className="inline-block w-5 h-5 stroke-current" />
        </label>
      </div>

      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">{firstName}</a>
        </Link>
      </div>

      <div className="mr-2">
        {importantSocialMediaLinks.map(({ Icon, url, name }) => (
          <a
            href={url}
            target="_blank"
            className="btn btn-ghost text-lg"
            key={name}
          >
            <Icon />
          </a>
        ))}
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn normal-case btn-ghost m-1">
          <FaAdjust />
          <span className="mx-1">Theme</span>
          <FaChevronDown />
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
  </div>
)

export default Navbar
