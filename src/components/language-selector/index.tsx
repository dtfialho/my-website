import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'

const LanguageSelector = () => {
  const { locale: activeLocale } = useRouter()

  return (
    <>
      <S.Button type="button">
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
