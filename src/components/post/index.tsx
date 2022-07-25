import Link from 'next/link'
import Image from 'next/image'
import format from 'date-fns/format'

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
}: PostType) => (
  <S.Wrapper>
    <Link href={`/blog/${slug}`} passHref>
      <S.Link title={title}>
        <S.ImageWrapper>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={title}
            priority={imgPriority}
          />
        </S.ImageWrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{excerpt}</S.Description>
          <S.Date>
            Postado em: <span>{format(new Date(date), 'dd/MM/yyyy')}</span>
          </S.Date>
        </S.Content>
      </S.Link>
    </Link>
  </S.Wrapper>
)

export default Post
