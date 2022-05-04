import Header from 'components/header'
import { PostType } from 'components/post'
import * as S from './styles'

type BlogProps = {
  posts: Array<PostType>
}

const Blog = ({ posts }: BlogProps) => (
  <>
    <Header fixed />
    <S.Wrapper>
      {posts.map((post) => (
        <p key={post.slug}>{post.slug}</p>
      ))}
    </S.Wrapper>
  </>
)

export default Blog
