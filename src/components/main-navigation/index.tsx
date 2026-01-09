'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname, useParams } from 'next/navigation'
import clsx from 'clsx'

import './styles.css'
import LanguageSelector from 'components/language-selector'

const MainNavigation = () => {
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const { locale: activeLocale } = useParams()
  const aboutMePath = `/${activeLocale === 'pt-BR' ? 'sobre-mim' : 'about-me'}`

  return (
    <nav className={clsx('main-navigation__wrapper', open && 'open')}>
      <button
        className="main-navigation__hamburger"
        type="button"
        title="Menu"
        onClick={() => setOpen(!open)}
      >
        <span className={clsx('main-navigation__icon', open && 'open')} />
      </button>

      <ul className={clsx('main-navigation__container', open && 'open')}>
        <li className="main-navigation__item">
          <Link href={`/${activeLocale}`}>
            <span
              className={clsx(
                'main-navigation__link',
                path === `/${activeLocale}` && 'active'
              )}
            >
              Home
            </span>
          </Link>
        </li>

        <li className="main-navigation__item">
          <Link href={`/${activeLocale}/blog`}>
            <span
              className={clsx(
                'main-navigation__link',
                !!path?.match(/\/blog/) && 'active'
              )}
            >
              Blog
            </span>
          </Link>
        </li>

        <li className="main-navigation__item">
          <Link href={aboutMePath}>
            <span
              className={clsx(
                'main-navigation__link',
                !!path?.match(new RegExp(aboutMePath)) && 'active'
              )}
            >
              {t('Common.aboutMe')}
            </span>
          </Link>
        </li>

        <li className="main-navigation__item" onClick={() => setOpen(!open)}>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
