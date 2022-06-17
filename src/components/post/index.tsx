import Image from 'next/image'
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
      <a href={`/blog/${slug}`}>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </a>
    </S.ImageWrapper>
    <S.Content>
      <S.Title>
        <a href={`/blog/${slug}`}>{title}</a>
      </S.Title>
      <S.Description>
        <a href={`/blog/${slug}`}>{excerpt}</a>
      </S.Description>
      <S.Date>
        Em: <span>{format(new Date(date), 'dd/MM/yyyy')}</span>
      </S.Date>
    </S.Content>
  </S.Wrapper>
)

export default Post
