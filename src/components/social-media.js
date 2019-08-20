import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  SocialMediaContainer,
  SocialMediaItem, 
  SocialMediaLink
} from "../styles/social-media"

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
      <SocialMediaContainer>
        {
          nodes.map(({ link, icon, id, label }) => (
            <SocialMediaItem key={id}>
              <SocialMediaLink href={link} target="_blank" rel="noopener noreferrer" title={label}>
                <i className={icon} />
              </SocialMediaLink>
            </SocialMediaItem>
          ))
        }
      </SocialMediaContainer>
      )
    }
  />
)

export default SocialMedia
