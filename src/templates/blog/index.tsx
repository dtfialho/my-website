import { getTranslations } from 'next-intl/server'

import Header from 'components/header'
import Post from 'components/post'
import * as S from './styles'

type BlogProps = {
  posts: Array<Post>
}

const Blog = async ({ posts }: BlogProps) => {
  const t = await getTranslations()

  return (
    <>
      <Header fixed />

      <S.Wrapper>
        <S.Title>{t('Blog.title')}</S.Title>

        {posts.map(
          ({ slug, title, hero_image: image, date, excerpt }, index) => (
            <Post
              key={slug}
              title={title}
              slug={slug}
              date={date}
              hero_image={image}
              excerpt={excerpt}
              imgPriority={!index}
            />
          )
        )}
      </S.Wrapper>
    </>
  )
}

export default Blog
