import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'
import gfm from 'remark-gfm'
import Image from 'next/legacy/image'
import rehypeRaw from 'rehype-raw'

import * as S from './styles'
const CodeHighlight = dynamic(() => import('components/code-highlight'))

type MarkdownRendererProps = {
  content: string
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
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
    <ReactMarkdown
      remarkPlugins={[gfm]}
      components={MarkdownComponents}
      linkTarget="_blank"
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
