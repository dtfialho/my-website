import Image from 'next/image'
import clsx from 'clsx'

import './styles.css'

interface SocialMediaProps {
  inverseColorToBlack?: boolean
}

const links = [
  {
    name: 'Github',
    url: 'https://github.com/dtfialho',
    icon: '/img/github.png'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/diego-teixeira-fialho-35b58ab0/',
    icon: '/img/linkedin.png'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/dtfialho',
    icon: '/img/twitter.png'
  }
]

const SocialMedia = ({ inverseColorToBlack = false }: SocialMediaProps) => (
  <ul className="social-media__container">
    {links.map(({ name, url, icon }) => (
      <li className="social-media__item" key={name}>
        <a
          className="social-media__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer me"
          title={name}
        >
          <Image
            className={clsx(inverseColorToBlack && 'inverse-color')}
            src={icon}
            alt={name}
            width={30}
            height={30}
            quality={100}
          />
        </a>
      </li>
    ))}
  </ul>
)

export default SocialMedia
