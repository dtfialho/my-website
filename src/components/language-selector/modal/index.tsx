import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { X } from '@styled-icons/feather/X'
import { CaretDown } from '@styled-icons/fa-solid/CaretDown'

import { LanguageSelectorContext } from '../provider'
import * as S from './styles'

const LanguageSelectorModal = () => {
  const router = useRouter()
  const { locales, locale: activeLocale, pathname, asPath, query } = router
  const { showModal, setShowModal } = useContext(LanguageSelectorContext)
  const [showList, setShowList] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState('')

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSelectLocale = (locale: string) => {
    setSelectedLocale(locale)
    setShowList(false)
  }

  const handleChangeLocale = async () => {
    await router.push({ pathname, query }, asPath, { locale: selectedLocale })
    handleCloseModal()
  }

  if (!showModal) return null

  return (
    <>
      <S.Overlay onClick={handleCloseModal} />
      <S.Wrapper>
        <S.Header>
          <S.Title>Selecione a sua linguagem:</S.Title>
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
                />
              </S.FlagWrapper>

              {selectedLocale || activeLocale}

              <S.DropdownIcon rotate={showList}>
                <CaretDown size={15} />
              </S.DropdownIcon>
            </S.ActiveItem>

            <S.List open={showList}>
              {locales?.map((locale) => (
                <S.ListItem
                  key={locale}
                  onClick={() => handleSelectLocale(locale)}
                >
                  <S.FlagWrapper>
                    <Image src={`/img/${locale}.jpg`} width="29" height="22" />
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
            Alterar idioma
          </S.ChangeLocale>
        </S.Body>
      </S.Wrapper>
    </>
  )
}

export default LanguageSelectorModal
