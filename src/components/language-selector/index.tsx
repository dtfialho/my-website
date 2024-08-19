'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { useLocale } from 'next-intl'

import { LanguageSelectorContext } from './provider'
import * as S from './styles'

const LanguageSelector = () => {
  const { setShowModal } = useContext(LanguageSelectorContext)
  const activeLocale = useLocale()

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <S.Button type="button" onClick={handleOpenModal}>
        <Image
          src={`/img/${activeLocale}.jpg`}
          width="29"
          height="22"
          alt={`Active language ${activeLocale}`}
        />
      </S.Button>
    </>
  )
}

export default LanguageSelector
