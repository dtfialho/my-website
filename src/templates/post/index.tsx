import { getTranslations } from 'next-intl/server'
import format from 'date-fns/format'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'components/header'
import MarkdownRenderer from 'components/markdown-renderer'
import './styles.css'

export type PostProps = {
  content: string
  title: string
  date: string
  hero_image: string
  locale: string
}

const Post = async ({
  content,
  title,
  date,
  hero_image,
  locale
}: PostProps) => {
  const t = await getTranslations()

  const dateFormat = locale === 'en' ? 'MM/dd/yyyy' : 'dd/MM/yyyy'
  const postDate = format(new Date(date), dateFormat)

  return (
    <>
      <Header fixed />
      <main className="post-content__wrapper">
        <article className="post-content__article">
          <h1 className="post-content__title">{title}</h1>
          <p className="post-content__date">
            <small>
              {t('Common.posted')}: {postDate}
            </small>
          </p>
          <figure className="post-content__article-image-wrapper">
            <Image
              className="post-content__article-image"
              src={hero_image}
              alt={title}
              priority
              fill
              sizes="100vw"
            />
          </figure>

          <MarkdownRenderer content={content} />
        </article>

        <Link href="/blog" passHref>
          <span className="post-content__back">{t('Post.back')}</span>
        </Link>
      </main>
    </>
  )
}

export default Post
