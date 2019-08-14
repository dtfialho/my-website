import React from 'react'
import '../styles/my-skills.scss'

const MySkills = () => (
  <div className="my-skills">
    <h2>Um pouco do que eu faço</h2>

    <div className="my-skills__items">
      <div className="my-skills__item">
        <h3>Frontend</h3>
        <ul>
          <li>Angular</li>
          <li>AngularJS</li>
          <li>CSS3</li>
          <li>Design Responsivo</li>
          <li>HTML5</li>
          <li>Javascript</li>
          <li>Pré-processadores (sass, less, stylus)</li>
          <li>React</li>
          <li>React Hooks</li>
        </ul>
      </div>
      <div className="my-skills__item">
        <h3>Backend</h3>
        <ul>
          <li>Node</li>
          <li>PHP</li>
          <li>Programação Orientada a Objetos</li>
          <li>Python</li>
          <li>Wordpress</li>
        </ul>
      </div>
      <div className="my-skills__item">
        <h3>Outros</h3>
        <ul>
          <li>Automatização de tarefas (grunt, gulp)</li>
          <li>Modelagem de banco de dados</li>
          <li>MySql</li>
          <li>PostgreeSQL</li>
          <li>Padrões de código</li>
          <li>Scrum</li>
          <li>Sistemas de controle de versão (git)</li>
          <li>TDD</li>
          <li>Webpack</li>
        </ul>
      </div>
    </div>
  </div>
)

export default MySkills