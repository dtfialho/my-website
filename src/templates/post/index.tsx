import useTranslation from 'next-translate/useTranslation'
import format from 'date-fns/format'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'components/header'
import MarkdownRenderer from 'components/markdown-renderer'
import * as S from './styles'

export type PostProps = {
  content: string
  title: string
  date: string
  hero_image: string
}

const Post = ({ content, title, date, hero_image }: PostProps) => {
  const { t, lang } = useTranslation()
  const dateFormat = lang === 'en' ? 'MM/dd/yyyy' : 'dd/MM/yyyy'
  const postDate = format(new Date(date), dateFormat)

  return (
    <>
      <Header fixed />
      <S.Wrapper>
        <S.Article>
          <S.Title>{title}</S.Title>
          <S.Date>
            <small>
              {t('common:posted')}: {postDate}
            </small>
          </S.Date>
          <S.ArticleImage>
            <Image src={hero_image} alt={title} priority fill sizes="100vw" />
          </S.ArticleImage>

          <MarkdownRenderer content={content} />
        </S.Article>

        <Link href="/blog" passHref>
          <S.Back>{t('post:back')}</S.Back>
        </Link>
      </S.Wrapper>
    </>
  )
}

export default Post
