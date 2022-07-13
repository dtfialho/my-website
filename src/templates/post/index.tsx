/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import gfm from 'remark-gfm'

import Header from 'components/header'
import * as S from './styles'

const CodeHighlight = dynamic(() => import('components/code-highlight'))

export type PostProps = {
  content: string
  title: string
  date: string
  hero_image: string
}

const Post = ({ content, title, date, hero_image }: PostProps) => {
  const MarkdownComponents: object = {
    p: (paragraph: { children?: any; node?: any }) => {
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
    },

    pre: (pre: { children?: any }) => pre.children,

    code: (code: { className?: string; inline?: boolean; children?: any }) => {
      if (code.inline) {
        return <code>{code.children}</code>
      }

      const language = code?.className?.replace('language-', '')

      return <CodeHighlight language={language} value={code.children} />
    }
  }

  return (
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

          <ReactMarkdown
            remarkPlugins={[gfm]}
            components={MarkdownComponents}
            linkTarget="_blank"
          >
            {content}
          </ReactMarkdown>
        </S.Article>

        <S.Back href="/blog">Voltar</S.Back>
      </S.Wrapper>
    </>
  )
}

export default Post
