import Link from 'next/link'
import Image from 'next/image'
import format from 'date-fns/format'
import { getTranslations } from 'next-intl/server'

import { DEFAULT_LOCALE } from 'lib/constants'
import './styles.css'

type PostProps = PostType & {
  locale?: string
}

const Post = async ({
  slug,
  title,
  date,
  hero_image: image,
  excerpt,
  imgPriority,
  locale = DEFAULT_LOCALE
}: PostProps) => {
  const t = await getTranslations()
  const dateFormat = locale === 'en' ? 'MM/dd/yyyy' : 'dd/MM/yyyy'
  const postDate = format(new Date(date), dateFormat)

  return (
    <article className="post__wrapper">
      <Link href={`/${locale}/blog/${slug}`}>
        <div className="post__link" title={title}>
          <div className="post__image-wrapper">
            <Image
              className="post__image"
              src={image}
              alt={title}
              priority={imgPriority}
              fill
              sizes="100vw"
            />
          </div>
          <div className="post__content">
            <h2 className="post__title">{title}</h2>
            <p className="post__description">{excerpt}</p>
            <em className="post__date">
              {t('Common.posted')}: <span>{postDate}</span>
            </em>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Post
