type RedirectsTypes = {
  [key: string]: {
    [key: string]: string
  }
}

export const supportedLocales = ['pt-BR', 'en']

export const postRedirects: RedirectsTypes = {
  'pt-BR': {
    'simple-accordion-with-html-and-css': 'accordion-simples-com-html-e-css',
    'creating-a-react-application-without-create-react-app':
      'criando-uma-aplicacao-em-react-sem-create-react-app'
  },
  en: {
    'criando-uma-aplicacao-em-react-sem-create-react-app':
      'creating-a-react-application-without-create-react-app',
    'accordion-simples-com-html-e-css': 'simple-accordion-with-html-and-css'
  }
}

export const generalRedirects: RedirectsTypes = {
  'pt-BR': {
    'about-me': 'sobre-mim'
  },
  en: {
    'sobre-mim': 'about-me'
  }
}
