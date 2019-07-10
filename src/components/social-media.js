import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/social-media.scss"

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
      <ul className="social-media">
        {
          nodes.map(({ link, icon, id, label }) => (
            <li className="social-media__items" key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="social-media__links" title={label}>
                <i className={icon} />
              </a>
            </li>
          ))
        }
      </ul>
      )
    }
  />
)

export default SocialMedia
