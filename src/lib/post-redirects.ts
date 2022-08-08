type RedirectsTypes = {
  [key: string]: {
    [key: string]: string
  }
}

const redirects: RedirectsTypes = {
  'pt-BR': {
    'simple-accordion-with-html-and-css': 'accordion-simples-com-html-e-css',
    'creating-a-react-application-with-react-without-create-react-app':
      'criando-uma-aplicacao-em-react-sem-create-react-app'
  },
  en: {
    'criando-uma-aplicacao-em-react-sem-create-react-app':
      'creating-a-react-application-with-react-without-create-react-app',
    'accordion-simples-com-html-e-css': 'simple-accordion-with-html-and-css'
  }
}

export default redirects
