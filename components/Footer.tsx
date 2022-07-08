import { fullName } from '../lib/names'
import Image from 'next/image'
import prideFlag from '../public/pride-flag.jpg'
import { socialMediaLinks } from '../lib/links'

const Footer = () => (
  <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <div className="absolute left-16">
      <Image src={prideFlag} alt="Love wins!" width={56} height={30} />
    </div>
    <div>
      <div className="grid grid-flow-col gap-4">
        {socialMediaLinks.map(({ Icon, url, name }) => (
          <a href={url} target="_blank" key={name}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
    <div>
      <p>Copyright © 2022 {fullName}</p>
    </div>
  </footer>
)

export default Footer
