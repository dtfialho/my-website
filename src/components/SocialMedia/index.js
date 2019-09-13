import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const SocialMedia = () => {
  const {allSocialMediaJson: { nodes }} = useStaticQuery(graphql`
    query SocialMedia {
      allSocialMediaJson {
        nodes {
          label
          icon
          link
          id
        }
      }
    }
  `)

  return (
    <S.SocialMediaContainer>
      {
        nodes.map(({ link, icon, id, label }) => (
          <S.SocialMediaItem key={id}>
            <S.SocialMediaLink href={link} target="_blank" rel="noopener noreferrer" title={label}>
              <S.SocialMediaIcon className={icon} />
            </S.SocialMediaLink>
          </S.SocialMediaItem>
        ))
      }
    </S.SocialMediaContainer>
  )
}

export default SocialMedia
