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
    <S.Link href={`/blog/${slug}`} title={title}>
      <S.ImageWrapper>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </S.ImageWrapper>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{excerpt}</S.Description>
        <S.Date>
          Em: <span>{format(new Date(date), 'dd/MM/yyyy')}</span>
        </S.Date>
      </S.Content>
    </S.Link>
  </S.Wrapper>
)

export default Post
