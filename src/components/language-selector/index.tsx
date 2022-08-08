import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { LanguageSelectorContext } from './provider'
import * as S from './styles'

const LanguageSelector = () => {
  const { setShowModal } = useContext(LanguageSelectorContext)
  const { locale: activeLocale } = useRouter()

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
          alt="Active language"
        />
      </S.Button>
    </>
  )
}

export default LanguageSelector
