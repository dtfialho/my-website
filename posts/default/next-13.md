---
title: 'Next 13!'
date: '2022-10-25T20:13:01-03:00'
hero_image: '/img/posts/next-13.png'
excerpt: 'Nesse post mostro algumas das mudanças principais no Next 13.'
---

Oi pessoal! Como várias pessoas devem saber, hoje rolou a Next Conf 2022, e nela apresentaram features sensacionais e nesse post vou trazer para vocês alguns dos pontos que mudaram da versão 12 para a versão 13 do Next! Então pega o cafézinho e vamos direto ao ponto.

## pages
O diretório `pages` foi movido para um novo chamado `app`. As pastas dentro desse diretório definirão as rotas da aplicação e não menos importante, agora utilizamos um arquivo `page.tsx` dentro de cada uma dessas pastas para definir a UI da página. Por exemplo, antes a estrutura era: `pages/hello.tsx` ou `pages/blog/[slug].tsx`. Agora ficam assim respectivamente: `app/hello/page.tsx` ou `app/blog/[slug]/page.tsx`.

```jsx
// app/blog/[slug]/page.tsx
async function getPost(slug) {
  const res = await fetch(`https://api.example.com/posts/${slug}`)
  return await res.json()
}

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug)

  return (
    <article>
      <h1>{post.title}</h1>
    </article>
  )
}
```

## Uma nova forma de organizar a UI
No Next 13 os diretórios dentro de `app` são para as rotas e os arquivos são para a interface, além disso podemos criar arquivos específicos para construir partes específicas da interface que funcionam da mesma forma que o `page.tsx` ficando dentro do diretório de uma rota, por exemplo: `app/hello/layout.tsx`, `app/hello/loading.tsx`, `app/hello/error.tsx` ou `app/hello/layout.tsx`.

- **layout.tsx**: usamos esse arquivo para definir um componente "wrapper". Dentro dele também podemos fazer um fetch para requisitar dados.

```jsx
export default function Layout({ children }) {
  return <section>{children}</section>
}
```

- **loading.tsx**: podemos agora definir um componente que mostra um "loader" durante a requisição de uma rota.

```jsx
export default function Loading() {
  return <MyAwesomeLoaderComponent />
}
```

## getStaticProps
Agora extraímos dados de páginas estáticas dentro de uma função customizada e podemos chamar essa função diretamente dentro do nosso componente. Os dados retornados por essa função são armazenados em cache até serem revalidados manualmente.

Antes:

```javascript
export async function getStaticProps() {
  const res = await fetch('https://example.url')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
```

Depois:

```jsx
async function fetchData() {
  const res = await fetch('https://example.url')
  const data = await res.json()

  return data
}

export default async function Page() {
  const data = await fetchData()

  return <div>{data}</div>
}
```

## getServerSideProps
Nossa forma de criar páginas SSR também mudou, agora fica da mesma forma que o `getStaticProps`. A única diferença é que precisamos passar `{ cache: "no-store" }` para o fetch da função.

Antes:

```javascript
export async function getServerSideProps() {
  const res = await fetch('https://example.url')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
```

Depois:

```jsx
async function fetchData() {
  const res = await fetch('https://example.url', { cache: 'no-store' })
  const data = await res.json()

  return data
}

export default async function Page() {
  const data = await fetchData()

  return <div>{data}</div>
}
```

## getStaticPaths
A função `getStaticPaths` foi renomeada para `generateStaticParams` e a chave `paths.params` não existe mais.

Antes:

```jsx
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 1 } }, { params: { id: 2 } }]
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/post/${params.id}`)
  const post = await res.json()

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }) {
  return <Post post={post} />
}
```

Depois:

```jsx
export async function generateStaticParams() {
  return [{ id: 1 }, { id: 2 }]
}

async function fetchPost(params) {
  const res = await fetch(`https://api.example.com/post/${params.id}`)
  const post = await res.json()

  return post
}

export default async function({ params }) {
  const post = await fetchPost(params)

  return <Post post={post} />
}
```

## ISR
Nossa forma de regenerar páginas estáticas de forma incremental (Incremental Static Regeneration ou somente ISR) também está mais simples. Agora apenas passamos a opção `{ next: { revalidate: <number> } }` no fetch da função.

Antes:

```javascript
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/post/${params.id}`)
  const post = await res.json()

  return {
    props: {
      post
    },
    revalidate: 60
  }
}
```

Depois:

```jsx
async function fetchPost(params) {
  const res = await fetch(`https://api.example.com/post/${params.id}`, {
    next: {
      revalidate: 60
    }
  })
  const post = await res.json()

  return post
}

export default async function({ params }) {
  const post = await fetchPost(params)

  return <Post post={post} />
}
```

Se estiver utilizando um client de API customizado ou não pode utilizar o fetch, é possível fazer dessa forma.

```javascript
export const revalidate = 60
```

## Migrando o _document.tsx e _app.tsx
Agora os arquivos `_document.tsx` e `_app.tsx` foram movidos para o arquivo `layout.tsx` que fica na raiz da pasta `app`. Precisamos adicionar as tags `html` e `body`. A tag `head` é opicional e os estilos globais são importados nesse arquivo, e não menos importante é que esse layout é obrigatório pois ele serve de "wrapper" para todas as páginas.

Antes:

```jsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

```jsx
// pages/_app.tsx
import type { AppProps } from 'next/app'
import '@/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component { ...pageProps }>
}
```

Depois:

```jsx
// app/layout.tsx
import '@/styles/global.css'

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My Website in Next.JS!</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## pages/404.tsx
A forma de retornar uma página customizada quando uma página não é entrada também mudou. Agora o arquivo se chama `not-found.tsx`, para mostrar essa página retornamos o componente chamando uma função `notFound` dentro de um arquivo `page.tsx`.

Antes:

```jsx
// pages/404.tsx
export default function NotFound() {
  return <p>Page not found!</p>
}
```

Depois:

```jsx
// app/blog/[slug]/not-found.tsx
export default function NotFound() {
  return <p>Post not found :(</p>
}
```

```jsx
// app/blog/[slug]/page.tsx
import { notFound } from 'next/dist/client/components/not-found'

export default async function PostPage({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <article>
      <h1>{post.title}</h1>
    </article>
  )
}
```

## next/head
`next/head` agora é um arquivo que fica dentro de cada pasta de rota. O `head.tsx` é um server component, então podemos fazer requisições de dados dentro desse arquivo. Um detalhe é que as tags permitidas nesse arquivo são `title`, `meta`, `link` e `script`.

Antes:
```jsx
// pages/index.tsx
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Index page!</title>
      </Head>
      <p>Hello!</p>
    </div>
  )
}
```

Depois:
```jsx
// pages/blog/head.tsx
async function getData() {
  const res = await fetch('https://example.url')
  const data = await res.json()

  return data
}

export default async function Head() {
  const data = await getData()

  return <title>{data.title}</title>
}
```

Bom pessoal, foi um post bem rapidinho com apenas algumas das mudanças. Para mais detalhes estou deixando o [link](https://nextjs.org/blog/next-13) do post oficial no blog do Next que é bem mais completo. Espero que tenham gostado e até a próxima!
