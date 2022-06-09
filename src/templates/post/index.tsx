import ReactMarkdown from 'react-markdown'

import Header from 'components/header'
import * as S from './styles'

type PostProps = {
  content: string
}

const Post = ({ content }: PostProps) => (
  <>
    <Header fixed />
    <S.Wrapper>
      <ReactMarkdown>{content}</ReactMarkdown>
    </S.Wrapper>
  </>
)

export default Post
