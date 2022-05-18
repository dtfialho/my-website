import Image from 'next/image'
import * as S from './styles'

export type PostType = {
  slug: string
  author: string
  date: string
  hero_image: string
  title: string
  excerpt: string
}

const Post = ({ title, hero_image: image }: PostType) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image src={image} layout="fill" objectFit="cover" />
    </S.ImageWrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
    </S.Content>
  </S.Wrapper>
)

export default Post
