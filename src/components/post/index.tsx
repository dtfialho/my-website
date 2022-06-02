import Image from 'next/image'
import Link from 'next/link'
import format from 'date-fns/format'

import * as S from './styles'

export type PostType = {
  slug: string
  date: string
  hero_image: string
  title: string
  excerpt: string
}

const Post = ({ slug, title, date, hero_image: image, excerpt }: PostType) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Link href={`/blog/${slug}`} passHref>
        <a>
          <Image src={image} layout="fill" objectFit="cover" alt={title} />
        </a>
      </Link>
    </S.ImageWrapper>
    <S.Content>
      <S.Title>
        <Link href={`/blog/${slug}`} passHref>
          <a>{title}</a>
        </Link>
      </S.Title>
      <S.Description>
        <Link href={`/blog/${slug}`} passHref>
          <a>{excerpt}</a>
        </Link>
      </S.Description>
      <S.Date>
        Em: <span>{format(new Date(date), 'dd/MM/yyyy')}</span>
      </S.Date>
    </S.Content>
  </S.Wrapper>
)

export default Post
