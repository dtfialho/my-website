import { getTranslations } from 'next-intl/server'

import Header from 'components/header'
import Post from 'components/post'
import './styles.css'

type BlogProps = {
  posts: Array<PostType>
  locale: string
}

const Blog = async ({ posts = [], locale }: BlogProps) => {
  const t = await getTranslations()

  return (
    <>
      <main className="blog__wrapper">
        <Header fixed />
        <h1 className="blog__title">{t('Blog.title')}</h1>

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
      </main>
    </>
  )
}

export default Blog
