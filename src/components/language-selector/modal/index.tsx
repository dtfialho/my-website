'use client'

import type { MouseEvent } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { useContext, useState } from 'react'
import clsx from 'clsx'

import './styles.css'
import { SUPPORTED_LOCALES } from 'lib/constants'
import { LanguageSelectorContext } from '../provider'

function replaceLocaleInPath(
  path: string,
  activeLocale: string,
  newLocale: string
) {
  return path.replace(`${activeLocale}`, `${newLocale}`)
}

const LanguageSelectorModal = () => {
  const t = useTranslations()
  const router = useRouter()
  const pathname = usePathname()
  const { locale: activeLocale } = useParams()
  const { showModal, setShowModal } = useContext(LanguageSelectorContext)
  const [showList, setShowList] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState('')

  const handleCloseModal = (
    e?: MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e?.stopPropagation()
    setShowModal(false)
  }

  const handleShowList = () => {
    setShowList((prev) => !prev)
  }

  const handleSelectLocale = (newLocale: string) => {
    setSelectedLocale(newLocale)
    setShowList(false)
  }

  const handleChangeLocale = async () => {
    const newPath = replaceLocaleInPath(
      pathname,
      activeLocale as string,
      selectedLocale
    )
    router.push(newPath)

    document.cookie = `NEXT_LOCALE=${selectedLocale}; path=/;`

    handleCloseModal()
  }

  if (!showModal) return null

  return (
    <>
      <div
        className="language-selector-modal__overlay"
        onClick={handleCloseModal}
      />

      <div
        className="language-selector-modal__wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="language-selector-modal__header">
          <p className="language-selector-modal__title">
            {t('Common.selectLanguage')}:
          </p>
          <button
            className="language-selector-modal__close"
            type="button"
            onClick={handleCloseModal}
          >
            <svg
              className="inline-block overflow-hidden align-middle"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              focusable="false"
            >
              <title>Close</title>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="language-selector-modal__body">
          <div className="language-selector-modal__select">
            <button
              className={clsx(
                'language-selector-modal__active-item',
                showList && 'list-open'
              )}
              type="button"
              onClick={handleShowList}
            >
              <figure className="language-selector-modal__flag-wrapper">
                <Image
                  src={`/img/${selectedLocale || activeLocale}.jpg`}
                  width={29}
                  height={22}
                  alt="Active locale"
                  title="Active locale"
                />
              </figure>

              {selectedLocale || activeLocale}

              <span
                className={clsx(
                  'language-selector-modal__dropdown-icon',
                  showList && 'rotated'
                )}
              >
                <svg
                  className="inline-block overflow-hidden align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301 191.9 288 191.9L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </span>
            </button>

            <ul
              className={clsx(
                'language-selector-modal__list',
                showList && 'open'
              )}
            >
              {SUPPORTED_LOCALES.map((locale) => (
                <li
                  className={clsx(
                    'language-selector-modal__list-item',
                    !showList && 'hidden'
                  )}
                  key={locale}
                  onClick={() => handleSelectLocale(locale)}
                >
                  <figure className="language-selector-modal__flag-wrapper">
                    <Image
                      src={`/img/${locale}.jpg`}
                      width="29"
                      height="22"
                      alt={`${locale} locale flag`}
                    />
                  </figure>
                  {locale}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="language-selector-modal__change-locale"
            type="button"
            onClick={handleChangeLocale}
            disabled={!selectedLocale || selectedLocale === activeLocale}
          >
            {t('Common.changeLanguage')}
          </button>
        </div>
      </div>
    </>
  )
}

export default LanguageSelectorModal
