import Link from 'next/link'
import Image from 'next/image'
import format from 'date-fns/format'
import useTranslation from 'next-translate/useTranslation'

import * as S from './styles'

export type PostType = {
  slug: string
  date: string
  hero_image: string
  title: string
  excerpt: string
  imgPriority?: boolean
}

const Post = ({
  slug,
  title,
  date,
  hero_image: image,
  excerpt,
  imgPriority
}: PostType) => {
  const { t, lang } = useTranslation()
  const dateFormat = lang === 'en' ? 'MM/dd/yyyy' : 'dd/MM/yyyy'
  const postDate = format(new Date(date), dateFormat)

  return (
    <S.Wrapper>
      <Link href={`/blog/${slug}`}>
        <S.Link title={title}>
          <S.ImageWrapper>
            <Image
              src={image}
              alt={title}
              priority={imgPriority}
              fill
              sizes="100vw"
            />
          </S.ImageWrapper>
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Description>{excerpt}</S.Description>
            <S.Date>
              {t('common:posted')}: <span>{postDate}</span>
            </S.Date>
          </S.Content>
        </S.Link>
      </Link>
    </S.Wrapper>
  )
}

export default Post
