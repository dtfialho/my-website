import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'
import Image from 'next/image'

import Header from 'components/header'
import * as S from './styles'

export type PostProps = {
  content: string
  title: string
  date: string
  hero_image: string
}

const Post = ({ content, title, date, hero_image }: PostProps) => {
  const MarkdownComponents: object = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        const metastring = image.properties.alt
        const alt = metastring?.replace(/ *\{[^)]*\} */g, '')
        const metaWidth = metastring.match(/{([^}]+)x/)
        const metaHeight = metastring.match(/x([^}]+)}/)
        const width = metaWidth ? metaWidth[1] : '768'
        const height = metaHeight ? metaHeight[1] : '432'
        const isPriority = metastring?.toLowerCase().match('{priority}')

        return (
          <S.ImageWrapper>
            <Image
              src={image.properties.src}
              width={width}
              height={height}
              alt={alt}
              priority={isPriority}
            />
          </S.ImageWrapper>
        )
      }

      return <p>{paragraph.children}</p>
    }
  }

  return (
    <>
      <Header fixed />
      <S.Wrapper>
        <article>
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
            />
          </S.ArticleImage>

          <ReactMarkdown components={MarkdownComponents}>
            {content}
          </ReactMarkdown>
        </article>
      </S.Wrapper>
    </>
  )
}

export default Post
