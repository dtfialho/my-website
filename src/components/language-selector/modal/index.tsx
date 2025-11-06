'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { useContext, useState } from 'react'
import { X } from '@styled-icons/feather/X'
import { CaretDown } from '@styled-icons/fa-solid/CaretDown'

import { SUPPORTED_LOCALES } from 'lib/constants'
import { LanguageSelectorContext } from '../provider'
import * as S from './styles'

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

  const handleCloseModal = () => {
    setShowModal(false)
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
    handleCloseModal()
  }

  if (!showModal) return null

  return (
    <>
      <S.Overlay onClick={handleCloseModal} />

      <S.Wrapper>
        <S.Header>
          <S.Title>{t('Common.selectLanguage')}:</S.Title>
          <S.Close type="button" onClick={handleCloseModal}>
            <X size={25} strokeWidth={2} title="Close" />
          </S.Close>
        </S.Header>

        <S.Body>
          <S.Select>
            <S.ActiveItem type="button" onClick={() => setShowList(true)}>
              <S.FlagWrapper>
                <Image
                  src={`/img/${selectedLocale || activeLocale}.jpg`}
                  width="29"
                  height="22"
                  alt="Active locale"
                  title="Active locale"
                />
              </S.FlagWrapper>

              {selectedLocale || activeLocale}

              <S.DropdownIcon rotated={showList}>
                <CaretDown size={15} />
              </S.DropdownIcon>
            </S.ActiveItem>

            <S.List open={showList}>
              {SUPPORTED_LOCALES.map((locale) => (
                <S.ListItem
                  key={locale}
                  onClick={() => handleSelectLocale(locale)}
                >
                  <S.FlagWrapper>
                    <Image
                      src={`/img/${locale}.jpg`}
                      width="29"
                      height="22"
                      alt={`${locale} locale flag`}
                    />
                  </S.FlagWrapper>
                  {locale}
                </S.ListItem>
              ))}
            </S.List>
          </S.Select>

          <S.ChangeLocale
            type="button"
            onClick={handleChangeLocale}
            disabled={!selectedLocale || selectedLocale === activeLocale}
          >
            {t('Common.changeLanguage')}
          </S.ChangeLocale>
        </S.Body>
      </S.Wrapper>
    </>
  )
}

export default LanguageSelectorModal
