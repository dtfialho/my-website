import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const AboutMeText = () => {
  const { me } = useStaticQuery(
    graphql`
      query {
        me: file(relativePath: { eq: "me.jpeg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <S.AboutMeTextContainer>
      <S.AboutMeFigure>
        <S.AboutMeImage fixed={me.childImageSharp.fixed} />
      </S.AboutMeFigure>
      
      <S.AboutMeTextParagraph>
        Olá! Meu nome é Diego Teixeira Fialho, nasci em Petrópolis/RJ e atualmente trabalho como Frontend Developer na <a href="http://www.personare.com.br" target="_blank" rel="noopener noreferrer">Personare</a>. Já trabalhei como Fullstack Developer na <a href="https://www.maxisite.net/" target="_blank" rel="noopener noreferrer">Maxisite</a> e Frontend Developer na <a href="https://www.alterdata.com.br/" target="_blank" rel="noopener noreferrer">Alterdata Software</a>.
      </S.AboutMeTextParagraph>

      <S.AboutMeTextParagraph>
        Apaixonado por tecnologia desde cedo sempre fui curioso para aprender. Aos 20 anos, fiz meu primeiro curso na área de tecnologia no SENAI e aos 23 ingressei na faculdade de Tecnologia da Informação e Comunicação pela FAETERJ - Petrópolis.
      </S.AboutMeTextParagraph>

      <S.AboutMeTextParagraph>
        Amo desenvolver e estudar novas tecnologias que surgem a cada dia para facilitar a nossa vida como desenvolvedores. Com o sangue metade café e metade código (e um pouco de World of Warcraft que é o meu passatempo favorito btw), amo criar e idealizar componentes utilizando frameworks Javascript e conceitos para um código limpo e bem estruturado.
      </S.AboutMeTextParagraph>
    </S.AboutMeTextContainer>
  )
}

export default AboutMeText
