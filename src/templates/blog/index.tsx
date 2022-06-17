import Header from 'components/header'
import Post, { PostType } from 'components/post'
import * as S from './styles'

type BlogProps = {
  posts: Array<PostType>
}

const Blog = ({ posts }: BlogProps) => (
  <>
    <Header fixed />
    <S.Wrapper>
      <S.Title>Posts recentes</S.Title>

      <S.Posts>
        {posts.map(({ slug, title, hero_image: image, date, excerpt }) => (
          <Post
            key={slug}
            title={title}
            slug={slug}
            date={date}
            hero_image={image}
            excerpt={excerpt}
          />
        ))}
        {posts.map(({ slug, title, hero_image: image, date, excerpt }) => (
          <Post
            key={slug}
            title={title}
            slug={slug}
            date={date}
            hero_image={image}
            excerpt={excerpt}
          />
        ))}
        {posts.map(({ slug, title, hero_image: image, date, excerpt }) => (
          <Post
            key={slug}
            title={title}
            slug={slug}
            date={date}
            hero_image={image}
            excerpt={excerpt}
          />
        ))}
        {posts.map(({ slug, title, hero_image: image, date, excerpt }) => (
          <Post
            key={slug}
            title={title}
            slug={slug}
            date={date}
            hero_image={image}
            excerpt={excerpt}
          />
        ))}
        {posts.map(({ slug, title, hero_image: image, date, excerpt }) => (
          <Post
            key={slug}
            title={title}
            slug={slug}
            date={date}
            hero_image={image}
            excerpt={excerpt}
          />
        ))}
        {posts.map(({ slug, title, hero_image: image, date, excerpt }) => (
          <Post
            key={slug}
            title={title}
            slug={slug}
            date={date}
            hero_image={image}
            excerpt={excerpt}
          />
        ))}
        {posts.map(({ slug, title, hero_image: image, date, excerpt }) => (
          <Post
            key={slug}
            title={title}
            slug={slug}
            date={date}
            hero_image={image}
            excerpt={excerpt}
          />
        ))}
      </S.Posts>
    </S.Wrapper>
  </>
)

export default Blog