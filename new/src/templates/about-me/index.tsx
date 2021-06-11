import Image from 'next/image'
import Header from 'components/header'
import * as S from './styles'

const AboutMe = () => (
  <>
    <Header fixed />
    <S.Wrapper>
      <S.TitleContainer>
        <Image src='/img/me.jpeg' layout='fixed' alt='Minha foto de perfil' width={200} height={200} />
        <S.Title>
          Sobre mim
        </S.Title>
      </S.TitleContainer>

      <p>
        Olá! Meu nome é Diego Teixeira Fialho, nasci em Petrópolis/RJ e atualmente trabalho como Frontend Developer na <a href="http://www.personare.com.br" target="_blank" rel="noopener noreferrer">Personare</a>. Já trabalhei como Fullstack Developer na <a href="https://www.maxisite.net/" target="_blank" rel="noopener noreferrer">Maxisite</a> e Frontend Developer na <a href="https://www.alterdata.com.br/" target="_blank" rel="noopener noreferrer">Alterdata Software</a>.
      </p>

      <p>
        Apaixonado por tecnologia desde cedo sempre fui curioso para aprender. Aos 20 anos, fiz meu primeiro curso na área de tecnologia no SENAI e aos 23 ingressei na faculdade de Tecnologia da Informação e Comunicação pela FAETERJ - Petrópolis.
      </p>

      <p>
        Amo desenvolver e estudar novas tecnologias que surgem a cada dia para facilitar a nossa vida como desenvolvedores. Com o sangue metade café e metade código, amo criar e idealizar componentes utilizando frameworks Javascript e conceitos para um código limpo e bem estruturado.
      </p>
    </S.Wrapper>
  </>
)

export default AboutMe
