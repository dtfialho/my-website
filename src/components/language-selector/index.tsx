'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { useParams } from 'next/navigation'
import { createPortal } from 'react-dom'

import './styles.css'
import { LanguageSelectorContext } from './provider'
import LanguageSelectorModal from './modal'

const LanguageSelector = () => {
  const { showModal, setShowModal } = useContext(LanguageSelectorContext)
  const { locale: activeLocale } = useParams()

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <button
        className="language-selector__button"
        type="button"
        onClick={handleOpenModal}
      >
        <Image
          src={`/img/${activeLocale}.jpg`}
          width="29"
          height="22"
          alt={`Active language ${activeLocale}`}
        />
      </button>

      {showModal && createPortal(<LanguageSelectorModal />, document.body)}
    </>
  )
}

export default LanguageSelector
