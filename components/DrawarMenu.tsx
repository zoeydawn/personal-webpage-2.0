import Link from 'next/link'

const menuItems = [
  { title: 'About', href: '/about' },
  { title: 'Experience', href: '/experience' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
  // { title: 'PGP Key', href: '/' },
  { title: 'Blog', href: '/blog' },
]

function DrawarMenu({ children }: { children: any }) {
  return (
    <div className="drawer absolute top-0 left-0 bottom-0">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
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

export default DrawarMenu
