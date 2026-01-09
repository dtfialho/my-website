'use client'

import type { MouseEvent } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { useContext, useState } from 'react'
import { X } from '@styled-icons/feather/X'
import { CaretDown } from '@styled-icons/fa-solid/CaretDown'
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
            <X size={24} strokeWidth={2} title="Close" />
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
                <CaretDown size={15} />
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
