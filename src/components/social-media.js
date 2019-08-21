import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as S from "../styles/social-media"

const SocialMedia = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ allSocialMediaJson: { nodes } }) => (
      <S.SocialMediaContainer>
        {
          nodes.map(({ link, icon, id, label }) => (
            <S.SocialMediaItem key={id}>
              <S.SocialMediaLink href={link} target="_blank" rel="noopener noreferrer" title={label}>
                <i className={icon} />
              </S.SocialMediaLink>
            </S.SocialMediaItem>
          ))
        }
      </S.SocialMediaContainer>
      )
    }
  />
)

export default SocialMedia
