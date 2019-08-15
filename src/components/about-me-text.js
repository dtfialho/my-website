import React from 'react'
import me from '../images/me.jpeg'

const AboutMeText = () => (
  <div className="about-me__text">
    <figure className="me">
      <img src={me} alt="Diego T. Fialho" />
    </figure>
    
    <p>
      Olá! Meu nome é Diego Teixeira Fialho, nasci em Petrópolis/RJ e atualmente trabalho como Frontend Developer na <a href="http://www.personare.com.br" target="_blank" rel="noopener noreferrer">Personare</a>. Já trabalhei como Fullstack Developer na <a href="https://www.maxisite.net/" target="_blank" rel="noopener noreferrer">Maxisite</a> e Frontend Developer na <a href="https://www.alterdata.com.br/" target="_blank" rel="noopener noreferrer">Alterdata Software</a>.
    </p>

    <p>
      Apaixonado por tecnologia desde cedo sempre fui curioso para aprender. Aos 20 anos, fiz meu primeiro curso na área de tecnologia no SENAI e aos 23 ingressei na faculdade de Tecnologia da Informação e Comunicação pela FAETERJ - Petrópolis.
    </p>

    <p>
      Amo desenvolver e estudar novas tecnologias que surgem a cada dia para facilitar a nossa vida como desenvolvedores. Com o sangue metade café e metade código (e um pouco de World of Warcraft que é o meu passatempo favorito btw), amo criar e idealizar componentes utilizando frameworks Javascript e conceitos para um código limpo e bem estruturado.
    </p>
  </div>
)

export default AboutMeText
