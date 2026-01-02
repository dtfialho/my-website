'use client'

import type { MouseEvent } from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { useParams } from 'next/navigation'

import { LanguageSelectorContext } from './provider'
import LanguageSelectorModal from './modal'
import * as S from './styles'

const LanguageSelector = () => {
  const { showModal, setShowModal } = useContext(LanguageSelectorContext)
  const { locale: activeLocale } = useParams()

  const handleOpenModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
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

      {showModal && <LanguageSelectorModal />}
    </>
  )
}

export default LanguageSelector
