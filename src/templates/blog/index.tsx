import { getTranslations } from 'next-intl/server'

import Header from 'components/header'
import Post from 'components/post'
import * as S from './styles'

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  hero_image: string
}

type BlogProps = {
  posts: Array<Post>
  locale: string
}

const Blog = async ({ posts, locale }: BlogProps) => {
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
              locale={locale}
            />
          )
        )}
      </S.Wrapper>
    </>
  )
}

export default Blog
