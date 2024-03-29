import useTranslation from 'next-translate/useTranslation'

import Header from 'components/header'
import Post, { PostType } from 'components/post'
import * as S from './styles'

type BlogProps = {
  posts: Array<PostType>
}

const Blog = ({ posts }: BlogProps) => {
  const { t } = useTranslation()

  return (
    <>
      <Header fixed />
      <S.Wrapper>
        <S.Title>{t('blog:title')}</S.Title>

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
