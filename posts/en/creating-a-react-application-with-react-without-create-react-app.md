---
title: 'Creating a React application without create-react-app'
date: '2022-07-07T14:45:49-0300'
hero_image: '/img/posts/criando-uma-aplicacao-em-react-sem-create-react-app.png'
excerpt: 'On this article I show you how to create a simple React application without using the create-react-app'
---

Speak up guys! After a while without comming back to write a post, I decided to bring up a point that is very important. Nowadays we have several frameworks that bring applications already configured ready to develop, however, sometimes most of the features that come in these frameworks are not used. So, in these cases it might be worth implementing a simpler application from scratch.

For those who want to take a direct look at the repository, [this is it](https://github.com/dtfialho/simple-react). Feel free to fork and contribute :)

And now, let's get to the point.

## Project structure
The structure is simple:

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

Explaining:
- **public**: folder for the static file of the application
- **src**: root folder where we add our components
- **webpack**: folder for the Webpack configuration files
- **.babelrc**: file for the babel configuration
- **.eslintignore** e **.eslintrc**: file for the eslint configuration
- **.prettierignore** e **.prettierrc**: file for the prettier configuration
- **package.json**: configuration file with project dependencies and automated scripts

First we will create a folder for our project and inside it we will add this structure that I showed. For now we will just create the folders and files and throughout the post we will add the settings for each one.

## Configuring Webpack
Let's start by configuring Webpack for the application, so let's add some dependencies to our project.

```bash
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/runtime @babel/preset-env @babel/preset-react @babel/eslint-parser eslint @pmmmwh/react-refresh-webpack-plugin react-refresh
```

Once installed, let's configure our three webpack files:
- `common.js`: file with more general settings, which are included in both the production and development builds.
- `development.js`: file with the settings to run the development environment.
- `production.js`: file with the settings to generate the build for production.

In the `common.js` file we will add the following code snippet:
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // application entrypoint
  entry: path.join(__dirname, '..', 'src', 'index.js'),

  // directory where files will be saved after compilation and bundle name
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'main.js'
  },

  // target 'web' indicating that it will be an application that will run on the client
  target: 'web',

  // extensions that will be read
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  // configure babel module to compile javascript files and ignoring the node_modules folder
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  // adds the HtmlWebpackPlugin which is responsible for compiling the HTML file as needed
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html')
    })
  ]
}

```

In the `development.js` file we will add:
```javascript
// we require the module for fast refresh (hot reloading)
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// we require the common.js module that we created in the other file
const common = require('./common')

// we add the fast refresh module in the plugins
common.plugins.push(new ReactRefreshPlugin())

module.exports = {
  // we add the settings of common.js via destructuring
  ...common,

  // we indicate that the mode to be run is going to be 'development'
  mode: 'development',

  // we added the development server configuration
  devServer: {
    port: '3000',
    static: ['../public'],
    open: true,
    hot: true
  }
}
```

And finally the `production.js` file is simpler, in it we just add:
```javascript
const common = require('./common')

module.exports = {
  ...common,

  // we indicate that the mode to be run is going to be 'production'
  mode: 'production'
}
```

Now that we've configured our webpack, there's still one more file we need to configure, so let's add this code snippet to `.babelrc`.
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

## Adding React
Now let's add React to our project, for that let's run:
```bash
yarn add react react-dom
```

After that we will update three files, `public/index.html`, `src/index.js` and `src/App.js`.

In `index.html` let's add a very minimalistic html:
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

In our `index.js` is where the application will be started, so in it we add:
```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
```

And in `App.js` we'll just configure a simple component, just to import it into our `index.js` and see it working.
```javascript
import React from 'react'

const App = () => <h1>Hello World!</h1>

export default App
```

Now let's add the scripts to our `package.json`:
```json
"scripts": {
  "start": "webpack-dev-server --config webpack/development",
  "build": "webpack --config webpack/production"
}
```

After that when running `yarn start` we will have a development server running, and when running `yarn build` it will be build for production inside the `dist` folder. And with that we already have our application ready to be developed. A missing point and maybe you are wondering. But what about styles? How do we do it?

Well, for that we can use a very simple solution that works very well for this application and we won't need to configure a loader to parse the css. This solution is `styled-components`, so we use a technique called `css in JS`, to use it is very simple. Let's first install the package with the command:

```bash
yarn add styled-components
```

After that let's create a new file inside the `src` folder called `styles.js` and we add:
```javascript
import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 40px;
  color: #333;
`
```

And then we change our `App.js` a little bit and we will have our components completely styled.
```javascript
import React from 'react'
import * as S from './styles'

const App = () => <S.Title>Hello World!</S.Title>

export default App
```

## Configuring eslint + prettier
Well, in addition to having our application already functional, it is always interesting to keep the code standard and we can combine the prettier that does this part very well with the eslint that helps us find problems in our code.

To configure them let's add some more packages:
```bash
yarn add -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier
```

In the `.eslintignore` and `.prettierignore` files we will add the files that will not be taken into account by these tools.
```
node_modules
yarn.lock
dist
```

Now the `.eslintrc` configuration:
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

And finally the `.prettierrc`:
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

And that's it! Now we have a very simple application configured that follows code patterns. I'm putting the versions of each package that was used for this post.

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
  "@pmmmwh/react-refresh-webpack-plugin": "^0.5.7",
  "babel-loader": "^8.2.5",
  "eslint": "^8.18.0",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-prettier": "^4.1.0",
  "eslint-plugin-react": "^7.30.1",
  "html-webpack-plugin": "^5.5.0",
  "prettier": "^2.7.1",
  "react-refresh": "^0.14.0",
  "webpack": "^5.73.0",
  "webpack-cli": "^4.10.0",
  "webpack-dev-server": "^4.9.2"
}
```

I hope this post was helpful and you enjoyed it! Soon I'll be back with the next post bringing more content. See you later!
