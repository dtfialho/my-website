import format from 'date-fns/format'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'components/header'
import MarkdownRenderer from 'components/markdown-renderer'
import * as S from './styles'

export type PostProps = {
  content: string
  title: string
  date: string
  hero_image: string
}

const Post = ({ content, title, date, hero_image }: PostProps) => (
  <>
    <Header fixed />
    <S.Wrapper>
      <S.Article>
        <S.Title>{title}</S.Title>
        <S.Date>
          <small>Postado em: {format(new Date(date), 'dd/MM/yyyy')}</small>
        </S.Date>
        <S.ArticleImage>
          <Image
            src={hero_image}
            alt={title}
            layout="fill"
            objectFit="contain"
            priority
          />
        </S.ArticleImage>

        <MarkdownRenderer content={content} />
      </S.Article>

      <Link href="/blog" passHref>
        <S.Back>Voltar</S.Back>
      </Link>
    </S.Wrapper>
  </>
)

export default Post
