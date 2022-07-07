---
title: 'Criando uma aplicação em React sem create-react-app'
date: '2022-07-07T14:45:49-0300'
hero_image: '/img/criando-uma-aplicacao-em-react-sem-create-react-app.png'
excerpt: 'Nesse artigo mostro como criar uma aplicação em React bem minimalista sem usar o create-react-app'
---

Fala pessoal! Depois de um tempinho sem voltar para escrever um post, resolvi trazer um ponto que é bem importante. Hoje em dia temos vários frameworks que trazem aplicações já configuradas prontas para desenvolver, porém, as vezes a maioria das funcionalidades que vem nesses frameworks não são usadas. Então, nesses casos pode valer a pena implementar uma aplicação mais simples do zero.

Para quem quiser dar uma olhada direto no repositório, é esse [aqui](https://github.com/dtfialho/simple-react). Sintam-se livres para fazer um fork e contribuir :)

Sem mais delongas vamos ao que interessa.

## Estrutura do projeto
A estrutura é bem simples:

```
— public/
  — index.html
— src/
  — App.js
  — index.js
— webpack/
  — common.js
  — development.js
  — production.js
— .babelrc
— .eslintignore
— .eslintrc
— .prettierignore
— .prettierrc
— package.json
```

Explicando:
- **public**: pasta para os arquivos estáticos da aplicação
- **src**: pasta raiz onde ficam os componentes
- **webpack**: pasta para os arquivos de configuração do webpack
- **.babelrc**: arquivo de configuração do babel
- **.eslintignore** e **.eslintrc**: arquivos de configuração do eslint
- **.prettierignore** e **.prettierrc**: arquivos de configuração do prettier
- **package.json**: arquivo de configuração com as dependências do projeto e os scripts automatizados

Primeiro vamos criar uma pasta para o nosso projeto e dentro dela vamos adicionar essa estrutura que mostrei. Por hora vamos só criar as pastas e arquivos e ao longo do post vamos adicionando as configurações de cada um.

## Configurando o Webpack
Vamos começar configurando o Webpack para a aplicação, então vamos adicionar algumas dependências no nosso projeto.

```
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/runtime @babel/preset-env @babel/preset-react @babel/eslint-parser eslint
```

Após instaladas vamos configurar nossos três arquivos do webpack:
- `common.js`: arquivo com configurações mais gerais, que entram tanto para o build de produção quanto para o de desenvolvimento.
- `development.js`: arquivo com as configurações para rodar o ambiente de desenvolvimento.
- `production.js`: arquivo com as configurações de gerar o build para produção.

No arquivo `common.js` vamos adicionar o seguinte trecho de código:
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // entrypoint da aplicação
  entry: path.join(__dirname, '..', 'src', 'index.js'),

  // diretório onde os arquivos serão salvos depois de compilados e nome do bundle
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'main.js'
  },

  // target 'web' indicando que será uma aplicação que rodará no client
  target: 'web',

  // extensões que serão lidas
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  // configura o módulo do babel para compilar os arquivos javascript excluindo a pasta node_modules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  // adiciona o plugin HtmlWebpackPlugin que é responsável por compilar o arquivo HTML conforme o necessário
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html')
    })
  ]
}

```

No arquivo `development.js` vamos adicionar:
```javascript
// fazemos um require do módulo common.js que criamos no outro arquivo
const common = require('./common')

module.exports = {
  // fazemos um destructuring das configurações no common.js
  ...common,

  // indicamos o modo que será rodado 'development'
  mode: 'development',

  // adicionamos a configuração do servidor de desenvolvimento
  devServer: {
    port: '3000',
    static: ['../public'],
    open: true,
    hot: true,
    liveReload: true
  }
}
```

E por último o arquivo `production.js` é mais simples, nele só adicionamos:
```javascript
const common = require('./common')

module.exports = {
  ...common,

  // indicamos que o modo é para build de produção
  mode: 'production'
}
```

Agora que configuramos o nosso webpack, ainda tem mais um arquivo que precisamos configurar, então vamos adicionar esse trecho de código no `.babelrc`.
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```

## Adicionando o React
Agora vamos adicionar o React ao nosso projeto, para isso vamos rodar:
```
yarn add react react-dom
```

Depois disso vamos atualizar três arquivos, o `public/index.html`, `src/index.js` e `src/App.js`.

No `index.html` vamos adicionar um html bem minimalista:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Simple React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

No nosso `index.js` é onde a aplicação vai ser iniciada, então nele colocamos:
```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
```

E no `App.js` vamos apenas configurar um componente simples, apenas para importar no nosso `index.js` e ver funcionando.
```javascript
import React from 'react'

const App = () => <h1>Hello World!</h1>

export default App
```

Agora vamos adicionar os scripts no nosso `package.json`:
```json
"scripts": {
  "start": "webpack-dev-server --config webpack/development",
  "build": "webpack --config webpack/production"
}
```

Após isso ao rodar `yarn start` nós teremos um servidor de desenvolvimento rodando, e ao rodar `yarn build` será feito o build para produção dentro da pasta `dist`. E com isso já temos nossa aplicação pronta para ser desenvolvida. Um ponto que faltou e talvez estejam se perguntando. Mas e os estilos? Como fazer?

Bem, para isso podemos utilizar uma solução bem simples que funciona muito bem para essa aplicação e não precisaremos configurar um loader para fazer o parse do css. Essa solução é o `styled-components`, assim nós utilizamos uma técnica chamada `css in JS`, para utilizarmos é bem simples. Vamos primeiro instalar o pacote com o comando:

```
yarn add styled-components
```

Após isso vamos criar um arquivo novo dentro da pasta `src` chamado `styles.js`.

```javascript
import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 40px;
  color: #333;
`
```

E depois alteramos o nosso `App.js` um pouco e já teremos nossos componentes completamente estilizados.
```javascript
import React from 'react'
import * as S from './styles'

const App = () => <S.Title>Hello World!</S.Title>

export default App
```

## Configurando eslint + prettier
Bom, além de termos nossa aplicação já funcional, é sempre interessante mantermos o padrão do código e podemos combinar o prettier que faz muito bem essa parte com o eslint que nos ajuda a encontrar problemas no nosso código.

Para configurá-los vamos adicionar mais alguns pacotes:
```
yarn add -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier
```

Nos arquivos `.eslintignore` e `.prettierignore` vamos adicionar os arquivos que não vão ser levados em consideração por essas ferramentas.
```
node_modules
yarn.lock
dist
```

Agora a configuração do `.eslintrc`:
```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"]
}
```

E por último o `.prettierrc`:
```json
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "none"
}
```

E pronto! Agora temos uma aplicação bem simples configurada e que segue padrões de código. Estou colocando as versões de cada pacote que foi utilizado para esse post.

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "styled-components": "^5.3.5"
},
"devDependencies": {
  "@babel/core": "^7.18.5",
  "@babel/eslint-parser": "^7.18.2",
  "@babel/plugin-transform-runtime": "^7.18.5",
  "@babel/preset-env": "^7.18.2",
  "@babel/preset-react": "^7.17.12",
  "@babel/runtime": "^7.18.3",
  "babel-loader": "^8.2.5",
  "eslint": "^8.18.0",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-prettier": "^4.1.0",
  "eslint-plugin-react": "^7.30.1",
  "html-webpack-plugin": "^5.5.0",
  "prettier": "^2.7.1",
  "webpack": "^5.73.0",
  "webpack-cli": "^4.10.0",
  "webpack-dev-server": "^4.9.2"
}
```

Espero que esse post tenha sido útil e que tenham gostado! Logo mais eu volto com o próximo post trazendo mais conteúdo. Até mais!
