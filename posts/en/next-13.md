---
title: 'Next 13!'
date: '2022-10-25T20:13:01-03:00'
hero_image: '/img/posts/next-13.png'
excerpt: 'In this post I show some main changes in Next 13.'
keywords: 'Next 13, Next.JS, Next JS, Next, Next Conf 2022'
---

Hello everyone! As you all should know, today happened the Next Conf 2022, and some amazing features were presented. On this post I bring to you some of the features that changed from version 12 to version 13 of Next! So grab some coffee and let's go straight to the point.

## app
Now we have the `pages` directory and a new one called `app`. The folders inside this directory will define the application routes and not less important, now we use a file called `page.tsx` inside each one of these folders to define the page UI. For instance, before the structure was: `pages/hello.tsx` or `pages/blog/[slug].tsx`. Now they are respectivelly `app/hello/page.tsx` or `app/blog/[slug]/page.tsx`.

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

## A new way of organizing the UI
In Next 13 the directories inside `app` are for the routes and files are for the interface, beside this we can create specific files to build specific parts of the interface that works the same way as the `page.tsx` inside a route directorie, for instance: `app/hello/layout.tsx`, `app/hello/loading.tsx`, `app/hello/error.tsx` or `app/hello/layout.tsx`.

- **layout.tsx**: we use this file as a wrapper component. Inside it we can also make a fetch call to request some data.

```jsx
export default function Layout({ children }) {
  return <section>{children}</section>
}
```

- **loading.tsx**: now we can define a component that shows a loader during some routing request.

```jsx
export default function Loading() {
  return <MyAwesomeLoaderComponent />
}
```

## getStaticProps
Now we can extract data for static pages inside a custom function and we call this function directly inside our component. The returned data from this function are stored in cache until be manually revalidated.

Before:

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

After:

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
Our way of creating SSR pages also changed, now it is the same way as the `getStaticProps` method. The only difference is that we need to pass `{ cache: "no-store" }` to our fetch.

Before:

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

After:

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
The function `getStaticPaths` was renamed to `generateStaticParams` and the key `paths.params` doesn't exist anymore.

Before:

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

After:

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
Our way of regenerate incremental static pages (Incremental Static Regeneration or just ISR) also is simpler. Now we just pass the option `{ next: { revalidate: <number> } }` in our fetch.

Before:

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

After:

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

If you are using a custom API client or can't use fetch, it is possible do this way.

```javascript
export const revalidate = 60
```

## Migrating _document.tsx and _app.tsx
Now our files `_document.tsx` and `_app.tsx` were moved to the file `layout.tsx` that stays in the root of the `app` folder. We need to add the `html` and `body` tags. The `head` tag is optional and the global styles need to be imported on this file, and not less important is that layout is required because it is used as a wrapper to all pages.

Before:

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

After:

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
The way of return a custom page when some page is not found also changed. Now the file is called `not-found.tsx`, to show this page we return the component calling a function `notFound` inside a `page.tsx` file.

Before:

```jsx
// pages/404.tsx
export default function NotFound() {
  return <p>Page not found!</p>
}
```

After:

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
`next/head` is now a file that stays inside each route folder. The `head.tsx` is a server component, then we can make requests to some data inside this file. One details is that the allowed tags in this file are `title`, `meta`, `link` and `script`.

Before:
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

After:
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

Well, it was a very quick post with only a few changes. For more details I leave the oficial post [link](https://nextjs.org/blog/next-13) in the Next blog that is a lot more complete. I hope you enjoyed and I see you later!
