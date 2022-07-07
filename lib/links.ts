import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
  FaTelegramPlane,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const importantSocialMediaLinks = [
  { name: 'Github', Icon: FaGithub, url: 'https://github.com/zoeydawn' },
  {
    name: 'Linkedin',
    Icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/zoeydawn/',
  },
]

export const socialMediaLinks = [
  ...importantSocialMediaLinks,
  { name: 'Twitter', Icon: FaTwitter, url: 'https://twitter.com/nerdy_zoey' },
  {
    name: 'Instagram',
    Icon: FaInstagram,
    url: 'https://www.instagram.com/spacecowgirlgringa/',
  },
  {
    name: 'Stack Overflow',
    Icon: FaStackOverflow,
    url: 'https://stackoverflow.com/users/6221770/zoey',
  },
  { name: 'Telegram', Icon: FaTelegramPlane, url: 'https://t.me/zoeydawn' },
  {
    name: 'contact@zoey.ninja',
    Icon: HiOutlineMail,
    url: 'mailto:contact@zoey.ninja',
  },
]
