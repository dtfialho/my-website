import Link from 'next/link'
import Image from 'next/image'
import format from 'date-fns/format'
import { getTranslations } from 'next-intl/server'

import { DEFAULT_LOCALE } from 'lib/constants'
import * as S from './styles'

type PostProps = PostType & {
  locale?: string
}

const Post = async ({
  slug,
  title,
  date,
  hero_image: image,
  excerpt,
  imgPriority,
  locale = DEFAULT_LOCALE
}: PostProps) => {
  const t = await getTranslations()
  const dateFormat = locale === 'en' ? 'MM/dd/yyyy' : 'dd/MM/yyyy'
  const postDate = format(new Date(date), dateFormat)

  return (
    <S.Wrapper>
      <Link href={`/${locale}/blog/${slug}`}>
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
              {t('Common.posted')}: <span>{postDate}</span>
            </S.Date>
          </S.Content>
        </S.Link>
      </Link>
    </S.Wrapper>
  )
}

export default Post
